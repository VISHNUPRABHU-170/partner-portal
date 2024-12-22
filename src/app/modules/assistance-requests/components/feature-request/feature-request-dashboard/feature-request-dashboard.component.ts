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
import { PaginatorComponent } from '../../../../core/components/paginator/paginator.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-feature-request-dashboard',
  standalone: true,
  imports: [MatToolbarModule, ButtonComponent, PieChartComponent, TableComponent, PaginatorComponent],
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

  pageIndex: number = 0;
  totalTickets: number = 0;

  chartUtils = new ChartUtils();

  constructor (
    private navigationService: NavigationService,
    private featureRequestService: FeatureRequestService,
    private destroyRef: DestroyRef
  ) { }

  ngOnInit(): void {
    this.featureRequestService.getTicketStatus();
    this.featureRequestService.getTickets({page: this.pageIndex, limit: 5});
    this.subscribeToFeatureTickets();
    this.subscribeToFeatureTicketStatus();
  }

  subscribeToFeatureTicketStatus() {
    const Subscription = this.featureRequestService.ticketStatusBehaviorSubject.subscribe((response: any) => {
      this.updateChartConfig(response);
    });
    this.destroyRef.onDestroy(() => {
      Subscription?.unsubscribe();
    });
  }

  subscribeToFeatureTickets() {
    const Subscription = this.featureRequestService.ticketsBehaviorSubject.subscribe((data: any) => {
      this.tableData = data?.tickets;
      this.totalTickets = data?.totalTickets;
    });
    this.destroyRef.onDestroy(() => {
      Subscription?.unsubscribe();
    });
  }

  updateChartConfig(ticketStatus: any) {
    this.awsChartConfig = this.chartUtils.updateChartConfig(ticketStatus.awsTickets, ticketStatus.totalTickets, CloudProviders.AWS, this.awsChartConfig);
    this.azureChartConfig = this.chartUtils.updateChartConfig(ticketStatus.azureTickets, ticketStatus.totalTickets, CloudProviders.AZURE, this.azureChartConfig);
    this.gcpChartConfig = this.chartUtils.updateChartConfig(ticketStatus.gcpTickets, ticketStatus.totalTickets, CloudProviders.GCP, this.gcpChartConfig);
    this.othersChartConfig = this.chartUtils.updateChartConfig(ticketStatus.othersTickets, ticketStatus.totalTickets, CloudProviders.OTHERS, this.othersChartConfig);
  }

  onCreateRequest(data: ButtonComponentModel) {
    this.navigationService.navigate(data.routerLink);
  }

  onPaginatorEvent(eve: PageEvent) {
    console.log(eve);
    this.tableData = [];
    this.pageIndex = eve.pageIndex;
    this.featureRequestService.getTickets({ page: this.pageIndex, limit: 5 });
  }
}
