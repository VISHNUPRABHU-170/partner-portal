import { MatToolbarModule } from '@angular/material/toolbar';
import { Component, DestroyRef, OnInit } from '@angular/core';
import {
  awsChartConfig,
  azureChartConfig,
  createRequestButtonConfig,
  gcpChartConfig,
  othersChartConfig
} from './config';
import { ButtonComponent } from '../../../../core/components/button/button.component';
import { NavigationService } from '../../../../core/services/navigation/navigation.service';
import { ButtonComponentModel } from '../../../../core/components/button/button.component.model';
import { PieChartComponent } from '../../../../core/components/pie-chart/pie-chart.component';
import { FeatureRequestService } from '../../../services/feature-request/feature-request.service';
import { CloudProviders, FeatureTicketModel } from '../../../models/feature-ticket.model';
import { ChartUtils } from '../../../utils/chart.utils';
import { TableComponent } from '../../../../core/components/table/table.component';

@Component({
  selector: 'app-feature-request-dashboard',
  standalone: true,
  imports: [MatToolbarModule, ButtonComponent, PieChartComponent, TableComponent],
  templateUrl: './feature-request-dashboard.component.html',
  styleUrl: './feature-request-dashboard.component.scss'
})
export class FeatureRequestDashboardComponent implements OnInit {
  createRequestButtonConfig = createRequestButtonConfig;
  awsChartConfig = awsChartConfig;
  azureChartConfig = azureChartConfig;
  gcpChartConfig = gcpChartConfig;
  othersChartConfig = othersChartConfig;

  tableData: FeatureTicketModel[] = [];
  columnsDef = ['title', 'description', 'cloudProvider', 'priority', 'deadLine', 'tags'];

  chartUtils = new ChartUtils();

  constructor (
    private navigationService: NavigationService,
    private featureRequestService: FeatureRequestService,
    private destroyRef: DestroyRef
  ) { }

  ngOnInit(): void {
    this.featureRequestService.getAllTicket();
    this.subscribeToFeatureRequestTickets();
  }

  subscribeToFeatureRequestTickets() {
    const Subscription = this.featureRequestService.ticketBehaviorSubject.subscribe((tickets: FeatureTicketModel[]) => {
      this.tableData = tickets;
      console.log(this.tableData);
      this.updateChartConfig(tickets);
    });
    this.destroyRef.onDestroy(() => {
      Subscription?.unsubscribe();
    });
  }

  updateChartConfig(tickets: FeatureTicketModel[]) {
    this.awsChartConfig = this.chartUtils.updateChartConfig(tickets, CloudProviders.AWS, this.awsChartConfig);
    this.azureChartConfig = this.chartUtils.updateChartConfig(tickets, CloudProviders.AZURE, this.azureChartConfig);
    this.gcpChartConfig = this.chartUtils.updateChartConfig(tickets, CloudProviders.GCP, this.gcpChartConfig);
    this.othersChartConfig = this.chartUtils.updateChartConfig(tickets, CloudProviders.OTHERS, this.othersChartConfig);
  }

  onCreateRequest(data: ButtonComponentModel) {
    this.navigationService.navigate(data.routerLink);
  }
}
