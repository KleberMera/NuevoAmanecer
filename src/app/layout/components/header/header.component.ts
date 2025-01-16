import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SidebarService } from '../../../services/sidebar.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private sidebarService = inject(SidebarService);
  unreadNotifications: number = 2;
  userName: string = 'Usuario Admin';
  userRole: string = 'Administrador';

  constructor() {}

  ngOnInit(): void {
    // Inicializar datos del usuario y notificaciones
  }

  toggleNotifications(): void {
    // Implementar lógica para mostrar/ocultar notificaciones
  }

  toggleSettings(): void {
    // Implementar lógica para mostrar/ocultar configuraciones
  }

  toggleProfile(): void {
    // Implementar lógica para mostrar/ocultar menú de perfil
  }


  isOpen = this.sidebarService.isOpen;

  toggleSidebar(): void {
    this.sidebarService.toggle();
  }

}
