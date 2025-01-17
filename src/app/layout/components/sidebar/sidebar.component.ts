import { Component, inject } from '@angular/core';
import { SidebarService } from '../../../services/sidebar.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarItemsComponent } from "../sidebar-items/sidebar-items.component";

@Component({
  selector: 'app-sidebar',
  imports: [SidebarItemsComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  public _sidebarService = inject(SidebarService);
  
}
