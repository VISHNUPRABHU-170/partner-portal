import { Injectable, DestroyRef } from '@angular/core';
import { FeatureTicketModel } from '../../models/feature-ticket.model';
import { RestApiService } from '../../../core/services/rest-api/rest-api.service';
import { BehaviorSubject } from 'rxjs';
import { ToasterService } from '../../../core/services/toaster/toaster.service';

@Injectable({
  providedIn: 'root'
})
export class FeatureRequestService {
  endPoint = 'feature';
  ticketStatusBehaviorSubject = new BehaviorSubject<any>([]);
  ticketsBehaviorSubject = new BehaviorSubject<FeatureTicketModel[]>([]);

  constructor (
    private restApiService: RestApiService,
    private toasterService: ToasterService,
    private destroyRef: DestroyRef
  ) { }

  getTicketStatus() {
    const Subscription = this.restApiService.get(this.endPoint + '/ticketStatus').subscribe(
      {
        next: (response: any) => {
          this.ticketStatusBehaviorSubject.next(response.data);
        },
        error: (error: any) => {}
      }
    );
    this.destroyRef.onDestroy(() => {
      Subscription?.unsubscribe();
    });
  }

  getTickets(params: any) {
    const Subscription = this.restApiService.get(this.endPoint + '/tickets', params).subscribe(
      {
        next: (response: any) => {
          this.ticketsBehaviorSubject.next(response.data as FeatureTicketModel[]);
        },
        error: (error: any) => {}
      }
    );
    this.destroyRef.onDestroy(() => {
      Subscription?.unsubscribe();
    });
  }

  getTicket(id: string) {
    return this.restApiService.get(`${this.endPoint}/${id}`);
  }

  createTicket(data: FeatureTicketModel) {
    const Subscription = this.restApiService.post(this.endPoint, data).subscribe({
      next: (response: any) => {
        this.toasterService.show(response.message, response.success);
      },
      error: (error: any) => {
        this.toasterService.show(error.message, error.success);
      }
    });
    this.destroyRef.onDestroy(() => {
      Subscription?.unsubscribe();
    });
  }

}
