import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { fromEvent } from 'rxjs';
import { SidebarService } from '../../../services/sidebar.service';

interface MenuItem {
  id: number;
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-sidebar-items',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar-items.component.html',
  styleUrl: './sidebar-items.component.scss'
})
export class SidebarItemsComponent {
  private readonly router = inject(Router);
  private readonly sidebarService = inject(SidebarService);
  private readonly destroyRef = inject(DestroyRef);
  private lastWidth = window.innerWidth;
  menuItems: MenuItem[] = [
    {
      id: 1,
      label: 'Dashboard',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>',
      route: 'dashboard'
    },
    {
      id: 2,
      label: 'Usuarios',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
      route: 'usuarios'
    },
    // Agregar más items según necesites
  ];

  constructor() {
    // Observador del evento resize usando RxJS
    fromEvent(window, 'resize')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        const currentWidth = window.innerWidth;
        const isMobileToDesktop = this.lastWidth < 768 && currentWidth >= 768;
        const isDesktopToMobile = this.lastWidth >= 768 && currentWidth < 768;

        if (isMobileToDesktop) {
          // Si cambia de mobile a desktop, abrimos el sidebar
          this.sidebarService.open();
        } else if (isDesktopToMobile) {
          // Si cambia de desktop a mobile, cerramos el sidebar
          this.sidebarService.close();
        }

        this.lastWidth = currentWidth;
      });
  }

  protected manejarClickItem(ruta: string): void {
    // Cerrar sidebar en mobile al hacer click en un item
    if (window.innerWidth < 768) {
      this.sidebarService.close();
    }
    console.log(ruta);
    const rutas = `home/${ruta}`;
    console.log(rutas);
    
    this.router.navigate([rutas]);
  }
}
