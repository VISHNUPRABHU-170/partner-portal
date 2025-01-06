import { Component } from '@angular/core';
import { highPriorityChartConfig, lowPriorityChartConfig, mediumPriorityChartConfig } from './config';
import { ChartUtils } from '../../../assistance-requests/utils/chart.utils';
import { PieChartComponent } from '../../../core/components/pie-chart/pie-chart.component';
import { SupportRequestService } from '../../../assistance-requests/services/support-request/support-request.service';

@Component({
  selector: 'app-support-ticket-tab',
  standalone: true,
  imports: [PieChartComponent],
  templateUrl: './support-ticket-tab.component.html',
  styleUrl: './support-ticket-tab.component.scss'
})
export class SupportTicketTabComponent {
  highPriorityChartConfig = highPriorityChartConfig;
  mediumPriorityChartConfig = mediumPriorityChartConfig;
  lowPriorityChartConfig = lowPriorityChartConfig;

  chartUtils = new ChartUtils();

  constructor (private supportRequestService: SupportRequestService) { }

  ngOnInit(): void {
    this.supportRequestService.getTicketPriorityStatus();
    this.subscribeToTicketStatus();
  }

  subscribeToTicketStatus() {
    this.supportRequestService.ticketPriorityStatusBehaviorSubject.subscribe((ticketStatus: any) => {
      this.updateChartConfig(ticketStatus);
    });
  }

  updateChartConfig(ticketStatus: any) {
    const ticketStatuses = [
      { config: 'highPriorityChartConfig', label: 'High', value: ticketStatus.high, color: '#EB6253' },
      { config: 'mediumPriorityChartConfig', label: 'Medium', value: ticketStatus.medium, color: '#FAD27D' },
      { config: 'lowPriorityChartConfig', label: 'Low', value: ticketStatus.low, color: '#5FD198' },
    ];

    type ConfigKeys = 'highPriorityChartConfig' | 'mediumPriorityChartConfig' | 'lowPriorityChartConfig';

    ticketStatuses.forEach(({ config, label, value, color }) => {
      const chartData = [{ value: value, color: color }];
      const centerTextData = { value: value, label: label };
      this[config as ConfigKeys] = this.chartUtils.updateChartConfig(chartData, centerTextData, this[config as ConfigKeys]);
    });
  }
}
