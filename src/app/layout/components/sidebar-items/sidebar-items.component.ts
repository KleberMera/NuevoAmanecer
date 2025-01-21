import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarService } from '../../../services/sidebar.service';
import { ViewportService } from '../../../services/viewport.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MenuItem } from '../../../core/models/menu';


@Component({
  selector: 'app-sidebar-items',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar-items.component.html',
  styleUrl: './sidebar-items.component.scss',
  animations: [
    trigger('submenuAnimation', [
      state(
        'closed',
        style({
          height: '0',
          opacity: '0',
        })
      ),
      state(
        'open',
        style({
          height: '*',
          opacity: '1',
        })
      ),
      transition('closed <=> open', [animate('200ms ease-in-out')]),
    ]),
  ],
})
export class SidebarItemsComponent {
  private readonly router = inject(Router);
  //private readonly router = inject(Router);
  private readonly sidebarService = inject(SidebarService);
  private readonly viewportService = inject(ViewportService);
  readonly expandedItems = signal<Record<number, boolean>>({});
  private readonly sanitizer = inject(DomSanitizer);

  
  protected readonly menuItems = signal<MenuItem[]>([
    {
      id: 1,
      label: 'Dashboard',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>',
      route: 'dashboard',
    },
    {
      id: 2,
      label: 'Usuarios',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
      subitems: [
        {
          id: 21,
          label: 'Lista de Usuarios',
          route: 'lista-usuarios',
        },
        {
          id: 22,
          label: 'Grupos',
          route: 'grupos',
        },
        {
          id: 23,
          label: 'Permisos',
          route: 'permisos',
        },
      ],
    },
    {
      id: 3,
      label: 'Configuración',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',
      subitems: [
        {
          id: 31,
          label: 'General',
          route: 'configuracion',
        },
        {
          id: 32,
          label: 'Seguridad',
          route: 'seguridad',
        },
      ],
    },
  ]);

  protected getSafeIcon(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }

  protected isItemActive(item: MenuItem): boolean {
    if (item.route && this.router.url.startsWith(item.route)) return true;
    return (
      item.subitems?.some((subitem) =>
        this.router.url.startsWith(subitem.route)
      ) ?? false
    );
  }

  protected manejarClickItem(item: MenuItem): void {
    if (item.subitems?.length) {
      this.expandedItems.update((state) => ({
        ...state,
        [item.id]: !state[item.id],
      }));
    } else {
      if (!this.viewportService.isDesktop()) {
        this.sidebarService.close();
      }
      if (item.route) {
        const rutas = `home/${item.route}`;

        this.router.navigate([rutas]);
      }
    }
  }

  protected handleSubItemClick(): void {
    if (!this.viewportService.isDesktop()) {
      this.sidebarService.close();
    }
  }
}
