import { Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
import { AssistanceRequestsComponent } from './modules/assistance-requests/components/assistance-requests/assistance-requests.component';
import { SupportFormComponent } from './modules/assistance-requests/components/support/support-form/support-form.component';
import { SupportDashboardComponent } from './modules/assistance-requests/components/support/support-dashboard/support-dashboard.component';
import { FeatureRequestFormComponent } from './modules/assistance-requests/components/feature-request/feature-request-form/feature-request-form.component';
import { FeatureRequestDashboardComponent } from './modules/assistance-requests/components/feature-request/feature-request-dashboard/feature-request-dashboard.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'assistance-requests',
    component: AssistanceRequestsComponent,
    children: [
      {
        path: '',
        redirectTo: 'support-dashboard',
        pathMatch: 'full'
      },
      {
        path: 'support-form',
        component: SupportFormComponent
      },
      {
        path: 'support-dashboard',
        component: SupportDashboardComponent
      },
      {
        path: 'feature-request-form',
        component: FeatureRequestFormComponent
      },
      {
        path: 'feature-request-dashboard',
        component: FeatureRequestDashboardComponent
      }
    ]
  }
];
