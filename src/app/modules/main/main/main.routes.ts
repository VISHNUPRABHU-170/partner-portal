import { Route } from "@angular/router";
import { assistanceRequestRoutes } from "../../assistance-requests/routing/assistance-requests.routes";

export const mainRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('../../dashboard/components/dashboard/dashboard.component')
      .then(c => c.DashboardComponent)
  },
  {
    path: 'assistance-requests',
    loadComponent: () => import('../../assistance-requests/components/assistance-requests/assistance-requests.component')
      .then(c => c.AssistanceRequestsComponent),
    children: assistanceRequestRoutes
  }
];
