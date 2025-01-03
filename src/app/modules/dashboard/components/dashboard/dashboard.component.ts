import { SupportRequestService } from './../../../assistance-requests/services/support-request/support-request.service';
import { Component } from '@angular/core';
import { PieChartComponent } from "../../../core/components/pie-chart/pie-chart.component";
import { featureChartConfig1, featureChartConfig2, supportChartConfig1, supportChartConfig2 } from './config';
import { ChartUtils } from '../../../assistance-requests/utils/chart.utils';
import { TICKET_STATUS_COLOR_MAPPER, TicketStatus } from '../../../assistance-requests/models/support-ticket.model';
import { FeatureRequestService } from '../../../assistance-requests/services/feature-request/feature-request.service';
import { CLOUD_COLOR_MAPPER, CloudProviders } from '../../../assistance-requests/models/feature-ticket.model';
import { BarChartComponent } from "../../../core/components/bar-chart/bar-chart.component";
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PieChartComponent, BarChartComponent, MatCardModule, MatTabsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  supportChartConfig1 = supportChartConfig1;
  supportChartConfig2 = supportChartConfig2;
  featureChartConfig1 = featureChartConfig1;
  featureChartConfig2 = featureChartConfig2;

  chartUtils = new ChartUtils();

  constructor (
    private supportRequestService: SupportRequestService,
    private featureRequestService: FeatureRequestService
  ) { }

  ngOnInit(): void {
    this.supportRequestService.getTicketStatus();
    this.featureRequestService.getTicketStatus();
    this.subscribeToSupportTicketStatus();
    this.subscribeToFeatureTicketStatus();
  }

  subscribeToSupportTicketStatus() {
    this.supportRequestService.ticketStatusBehaviorSubject.subscribe((ticketStatus: any) => {
      const chartData = [
        { name: "TODO", value: ticketStatus[TicketStatus.TODO], color: TICKET_STATUS_COLOR_MAPPER[TicketStatus.TODO] },
        { name: "INPROGRESS", value: ticketStatus[TicketStatus.INPROGRESS], color: TICKET_STATUS_COLOR_MAPPER[TicketStatus.INPROGRESS] },
        { name: "COMPLETED", value: ticketStatus[TicketStatus.COMPLETED], color: TICKET_STATUS_COLOR_MAPPER[TicketStatus.COMPLETED] }
      ];
      this.supportChartConfig1 = this.chartUtils.updateChartConfig(chartData, null, this.supportChartConfig1);
      this.supportChartConfig2.data = [ticketStatus[TicketStatus.TODO], ticketStatus[TicketStatus.INPROGRESS], ticketStatus[TicketStatus.COMPLETED]];
      this.supportChartConfig2.colors = [TICKET_STATUS_COLOR_MAPPER[TicketStatus.TODO], TICKET_STATUS_COLOR_MAPPER[TicketStatus.INPROGRESS], TICKET_STATUS_COLOR_MAPPER[TicketStatus.COMPLETED]];
      this.supportChartConfig2 = structuredClone(this.supportChartConfig2);
    });
  }

  subscribeToFeatureTicketStatus() {
    this.featureRequestService.ticketStatusBehaviorSubject.subscribe((ticketStatus: any) => {
      const chartData = [
        { name: "AWS", value: ticketStatus.awsTickets, color: CLOUD_COLOR_MAPPER[CloudProviders.AWS].fails },
        { name: "AZURE", value: ticketStatus.azureTickets, color: CLOUD_COLOR_MAPPER[CloudProviders.AZURE].fails },
        { name: "GCP", value: ticketStatus.gcpTickets, color: CLOUD_COLOR_MAPPER[CloudProviders.GCP].fails },
        { name: "OTHERS", value: ticketStatus.othersTickets, color: CLOUD_COLOR_MAPPER[CloudProviders.OTHERS].fails }
      ];
      this.featureChartConfig1 = this.chartUtils.updateChartConfig(chartData, null, this.featureChartConfig1);
      this.featureChartConfig2.data = [ticketStatus.awsTickets, ticketStatus.azureTickets, ticketStatus.gcpTickets, ticketStatus.othersTickets];
      this.featureChartConfig2.colors = [CLOUD_COLOR_MAPPER[CloudProviders.AWS].fails, CLOUD_COLOR_MAPPER[CloudProviders.AZURE].fails, CLOUD_COLOR_MAPPER[CloudProviders.GCP].fails, CLOUD_COLOR_MAPPER[CloudProviders.OTHERS].fails];
      this.featureChartConfig2 = structuredClone(this.featureChartConfig2);
    });
  }
}
