import { Component, inject, signal } from '@angular/core';
import { SidebarService } from '../../../services/sidebar.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private sidebarService = inject(SidebarService);
  isOpen = this.sidebarService.isOpen;
  //unreadNotifications: number = 2;
  unreadNotifications = signal<number>(2);
  userName = signal<string>('Usuario Admin');
  //userRole: string = 'Administrador';
  userRole = signal<string>('Administrador');
  constructor() {
    //Si la pantalla es desktop mostrar el sidebar
    if (window.innerWidth >= 1024) {
      this.sidebarService.toggle();
    }
  }

  ngOnInit(): void {}

  toggleNotifications(): void {
    // Implementar lógica para mostrar/ocultar notificaciones
  }

  toggleSettings(): void {
    // Implementar lógica para mostrar/ocultar configuraciones
  }

  toggleProfile(): void {
    // Implementar lógica para mostrar/ocultar menú de perfil
  }

  toggleSidebar(): void {
    this.sidebarService.toggle();
  }
}
