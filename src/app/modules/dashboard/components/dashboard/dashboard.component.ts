import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { FeatureTicketChartsComponent } from '../feature-ticket-charts/feature-ticket-charts.component';
import { SupportTicketChartsComponent } from '../support-ticket-charts/support-ticket-charts.component';
import { FeatureTicketTabComponent } from '../feature-ticket-tab/feature-ticket-tab.component';
import { SupportTicketTabComponent } from '../support-ticket-tab/support-ticket-tab.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatTabsModule,
    FeatureTicketChartsComponent,
    SupportTicketChartsComponent,
    FeatureTicketTabComponent,
    SupportTicketTabComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
