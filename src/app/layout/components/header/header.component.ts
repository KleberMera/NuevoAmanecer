import { Component, inject, signal } from '@angular/core';
import { SidebarService } from '../../../services/sidebar.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private sidebarService = inject(SidebarService);
  isOpen = this.sidebarService.isOpen;
  //unreadNotifications: number = 2;
  unreadNotifications = signal<number>(2);
  userName = signal<string>('Usuario Admin');
  //userRole: string = 'Administrador';
  userRole = signal<string>('Administrador');
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


 

  toggleSidebar(): void {
    this.sidebarService.toggle();
  }

}
