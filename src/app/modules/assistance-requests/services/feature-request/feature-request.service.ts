import { Injectable } from '@angular/core';
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
    private toasterService: ToasterService
  ) { }

  getTicketStatus() {
    this.restApiService.get(this.endPoint + '/ticketStatus').subscribe(
      {
        next: (response: any) => {
          this.ticketStatusBehaviorSubject.next(response.data);
        },
        error: (error: any) => {

        }
      }
    );
  }

  getTickets(params: any) {
    this.restApiService.get(this.endPoint + '/tickets', params).subscribe(
      {
        next: (response: any) => {
          this.ticketsBehaviorSubject.next(response.data as FeatureTicketModel[]);
        },
        error: (error: any) => {

        }
      }
    );;
  }

  getTicket(id: string) {
    return this.restApiService.get(`${this.endPoint}/${id}`);
  }

  createTicket(data: FeatureTicketModel) {
    this.restApiService.post(this.endPoint, data).subscribe({
      next: (response: any) => {
        this.toasterService.show(response.message, response.success);
      },
      error: (error: any) => {
        this.toasterService.show(error.message, error.success);
      }
    });
  }

}
