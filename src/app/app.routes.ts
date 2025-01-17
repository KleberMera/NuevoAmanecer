import { Routes } from '@angular/router';
import { authRoutes } from './auth/auth.routes';
import { LayoutComponent } from './layout/layout.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
//import { pagesRoutes } from './pages/pages.routes';

export const routes: Routes = [
  {
    path: 'auth',
    children: authRoutes,
  },
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: AdminDashboardComponent,
      },
      {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
     
    ],
    
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  
];
