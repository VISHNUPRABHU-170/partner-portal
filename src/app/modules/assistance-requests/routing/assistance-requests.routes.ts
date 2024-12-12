import { Route } from "@angular/router";

export const assistanceRequestRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'support-dashboard',
    pathMatch: 'full'
  },
  {
    path: 'support-form',
    loadComponent: () => import('../components/support/support-form/support-form.component')
      .then(c => c.SupportFormComponent)
  },
  {
    path: 'support-dashboard',
    loadComponent: () => import('../components/support/support-dashboard/support-dashboard.component')
      .then(c => c.SupportDashboardComponent)
  },
  {
    path: 'feature-request-form',
    loadComponent: () => import('../components/feature-request/feature-request-form/feature-request-form.component')
      .then(c => c.FeatureRequestFormComponent)
  },
  {
    path: 'feature-request-dashboard',
    loadComponent: () => import('../components/feature-request/feature-request-dashboard/feature-request-dashboard.component')
      .then(c => c.FeatureRequestDashboardComponent)
  }
];
