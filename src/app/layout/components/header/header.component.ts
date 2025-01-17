import { Component, inject, signal } from '@angular/core';
import { SidebarService } from '../../../services/sidebar.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public readonly _sidebarService = inject(SidebarService);
  unreadNotifications = signal<number>(2);
  userName = signal<string>('Usuario Admin');
  userRole = signal<string>('Administrador');


 
}
