import { DestroyRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SupportTicketModel } from '../../models/support-ticket.model';
import { RestApiService } from '../../../core/services/rest-api/rest-api.service';
import { ToasterService } from '../../../core/services/toaster/toaster.service';

@Injectable({
  providedIn: 'root'
})
export class SupportRequestService {
  endPoint = 'support';
  ticketStatusBehaviorSubject = new BehaviorSubject<any>([]);
  ticketsBehaviorSubject = new BehaviorSubject<SupportTicketModel[]>([]);

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
        error: (error: any) => {

        }
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
          this.ticketsBehaviorSubject.next(response.data as SupportTicketModel[]);
        },
        error: (error: any) => {

        }
      }
    );
    this.destroyRef.onDestroy(() => {
      Subscription?.unsubscribe();
    });
  }

  getTicket(id: string) {
    return this.restApiService.get(`${this.endPoint}/${id}`);
  }

  createTicket(data: SupportTicketModel) {
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
