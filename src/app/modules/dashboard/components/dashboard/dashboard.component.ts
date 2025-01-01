import { SupportRequestService } from './../../../assistance-requests/services/support-request/support-request.service';
import { Component } from '@angular/core';
import { PieChartComponent } from "../../../core/components/pie-chart/pie-chart.component";
import { supportChartConfig1 } from './config';
import { ChartUtils } from '../../../assistance-requests/utils/chart.utils';
import { TICKET_STATUS_COLOR_MAPPER, TicketStatus } from '../../../assistance-requests/models/support-ticket.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PieChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  supportChartConfig1 = supportChartConfig1;

  chartUtils = new ChartUtils();

  constructor (private supportRequestService: SupportRequestService) {}

  ngOnInit(): void {
    this.supportRequestService.getTicketStatus();
    this.subscribeToSupportTicketStatus();
  }

  subscribeToSupportTicketStatus() {
    this.supportRequestService.ticketStatusBehaviorSubject.subscribe((ticketStatus: any) => {
      const chartData = [
        { name: "TODO", value: ticketStatus[TicketStatus.TODO], color: TICKET_STATUS_COLOR_MAPPER[TicketStatus.TODO] },
        { name: "INPROGRESS", value: ticketStatus[TicketStatus.INPROGRESS], color: TICKET_STATUS_COLOR_MAPPER[TicketStatus.INPROGRESS] },
        { name: "COMPLETED", value: ticketStatus[TicketStatus.COMPLETED], color: TICKET_STATUS_COLOR_MAPPER[TicketStatus.COMPLETED] }
      ];
      this.supportChartConfig1 = this.chartUtils.updateChartConfig(chartData, null, this.supportChartConfig1);
    });
  }
}
