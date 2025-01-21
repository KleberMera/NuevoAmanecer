import { Routes } from '@angular/router';
import { authRoutes } from './auth/auth.routes';
import { LayoutComponent } from './layout/layout.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserListComponent } from './pages/admin/usuario/ui/user-list/user-list.component';



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
        path: 'lista-usuarios',
        component: UserListComponent,
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
