import { SupportRequestService } from './../../../services/support-request/support-request.service';
import { Component, DestroyRef } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { createRequestButtonConfig } from './config';
import { ButtonComponent } from '../../../../core/components/button/button.component';
import { NavigationService } from '../../../../core/services/navigation/navigation.service';
import { ButtonComponentModel } from '../../../../core/components/button/button.component.model';
import { PieChartComponent } from '../../../../core/components/pie-chart/pie-chart.component';
import { PaginatorComponent } from "../../../../core/components/paginator/paginator.component";
import { TableComponent } from "../../../../core/components/table/table.component";
import { SupportTicketModel } from '../../../models/support-ticket.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-support-dashboard',
  standalone: true,
  imports: [MatToolbarModule, ButtonComponent, PieChartComponent, PaginatorComponent, TableComponent],
  templateUrl: './support-dashboard.component.html',
  styleUrl: './support-dashboard.component.scss'
})
export class SupportDashboardComponent {
  createRequestButtonConfig = createRequestButtonConfig;

  tableData: SupportTicketModel[] = [];
  columnsDef = ['title', 'description', 'priority', 'deadLine'];

  pageIndex: number = 0;
  totalTickets: number = 0;

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

  }

  onCreateRequest(data: ButtonComponentModel) {
    this.navigationService.navigate(data.routerLink);
  }

  onTableEvent(data: any) {
    const queryParams = { id: data._id };
    this.navigationService.navigate('/partner-portal/assistance-requests/feature-ticket-view', queryParams);
  }

  onPaginatorEvent(eve: PageEvent) {
    this.tableData = [];
    this.pageIndex = eve.pageIndex;
    this.supportRequestService.getTickets({ page: this.pageIndex, limit: 5 });
  }
}
