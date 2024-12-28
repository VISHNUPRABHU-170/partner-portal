import { Component, DestroyRef } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PageEvent } from '@angular/material/paginator';
import { SupportRequestService } from './../../../services/support-request/support-request.service';
import {
  createRequestButtonConfig,
  resolvedTicketChartConfig,
  totalTicketChartConfig,
  inProgressTicketChartConfig,
  toDoTicketChartConfig
} from './config';
import { ButtonComponent } from '../../../../core/components/button/button.component';
import { NavigationService } from '../../../../core/services/navigation/navigation.service';
import { ButtonComponentModel } from '../../../../core/components/button/button.component.model';
import { PieChartComponent } from '../../../../core/components/pie-chart/pie-chart.component';
import { PaginatorComponent } from "../../../../core/components/paginator/paginator.component";
import { TableComponent } from "../../../../core/components/table/table.component";
import { SupportTicketModel, TicketStatus } from '../../../models/support-ticket.model';
import { ChartUtils } from '../../../utils/chart.utils';

@Component({
  selector: 'app-support-dashboard',
  standalone: true,
  imports: [MatToolbarModule, ButtonComponent, PieChartComponent, PaginatorComponent, TableComponent],
  templateUrl: './support-dashboard.component.html',
  styleUrl: './support-dashboard.component.scss'
})
export class SupportDashboardComponent {
  createRequestButtonConfig = createRequestButtonConfig;
  toDoTicketChartConfig = toDoTicketChartConfig;
  inProgressTicketChartConfig = inProgressTicketChartConfig;
  resolvedTicketChartConfig = resolvedTicketChartConfig;
  totalTicketChartConfig = totalTicketChartConfig;

  tableData: SupportTicketModel[] = [];
  columnsDef = ['title', 'description', 'createdAt', 'deadLine', 'priority', 'status'];

  pageIndex: number = 0;
  totalTickets: number = 0;

  chartUtils = new ChartUtils();

  constructor (
    private navigationService: NavigationService,
    private supportRequestService: SupportRequestService,
    private destroyRef: DestroyRef
  ) { }

  ngOnInit(): void {
    this.supportRequestService.getTicketStatus();
    this.supportRequestService.getTickets({ page: this.pageIndex, limit: 5 });
    this.subscribeToFeatureTickets();
    this.subscribeToFeatureTicketStatus();
  }

  subscribeToFeatureTicketStatus() {
    const Subscription = this.supportRequestService.ticketStatusBehaviorSubject.subscribe((response: any) => {
      this.updateChartConfig(response);
    });
    this.destroyRef.onDestroy(() => {
      Subscription?.unsubscribe();
    });
  }

  subscribeToFeatureTickets() {
    const Subscription = this.supportRequestService.ticketsBehaviorSubject.subscribe((data: any) => {
      this.tableData = data?.tickets;
      this.totalTickets = data?.totalTickets;
    });
    this.destroyRef.onDestroy(() => {
      Subscription?.unsubscribe();
    });
  }

  updateChartConfig(ticketStatus: any) {
    this.toDoTicketChartConfig = this.chartUtils.updateSupportChartConfig(ticketStatus[TicketStatus.TODO], TicketStatus.TODO, this.toDoTicketChartConfig);
    this.inProgressTicketChartConfig = this.chartUtils.updateSupportChartConfig(ticketStatus[TicketStatus.INPROGRESS], TicketStatus.INPROGRESS, this.inProgressTicketChartConfig);
    this.resolvedTicketChartConfig = this.chartUtils.updateSupportChartConfig(ticketStatus[TicketStatus.COMPLETED], TicketStatus.COMPLETED, this.resolvedTicketChartConfig);
    this.totalTicketChartConfig = this.chartUtils.updateSupportChartConfig(ticketStatus[TicketStatus.TICKETS], TicketStatus.TICKETS, this.totalTicketChartConfig);
  }

  onCreateRequest(data: ButtonComponentModel) {
    this.navigationService.navigate(data.routerLink);
  }

  onTableEvent(data: any) {
    const queryParams = { id: data._id };
    // this.navigationService.navigate('/partner-portal/assistance-requests/feature-ticket-view', queryParams);
  }

  onPaginatorEvent(eve: PageEvent) {
    this.tableData = [];
    this.pageIndex = eve.pageIndex;
    this.supportRequestService.getTickets({ page: this.pageIndex, limit: 5 });
  }
}
