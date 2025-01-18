import { Component, inject } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { SidebarService } from '../services/sidebar.service';
import { TabComponent } from "./components/tab/tab.component";
import { ViewportService } from '../services/viewport.service';
import { ScreenService } from '../services/screen.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, RouterOutlet, SidebarComponent, TabComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  sidebarService = inject(SidebarService);
  public readonly _viewportService = inject(ViewportService);
  public readonly _screenService = inject(ScreenService);

}

