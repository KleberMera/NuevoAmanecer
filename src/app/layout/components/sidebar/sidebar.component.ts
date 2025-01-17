import { Component, computed, inject } from '@angular/core';
import { SidebarService } from '../../../services/sidebar.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarItemsComponent } from "../sidebar-items/sidebar-items.component";
import { ViewportService } from '../../../services/viewport.service';

@Component({
  selector: 'app-sidebar',
  imports: [SidebarItemsComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  public _sidebarService = inject(SidebarService);

   private readonly viewportService = inject(ViewportService);

  protected readonly showOverlay = computed(() => 
    !this.viewportService.isDesktop() && this._sidebarService.isOpen()
  );
}
