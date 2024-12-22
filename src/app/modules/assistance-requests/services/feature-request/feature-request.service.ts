import { Injectable } from '@angular/core';
import { FeatureTicketModel } from '../../models/feature-ticket.model';
import { RestApiService } from '../../../core/services/rest-api/rest-api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureRequestService {
  endPoint = 'feature';
  ticketStatusBehaviorSubject = new BehaviorSubject<any>([]);
  ticketsBehaviorSubject = new BehaviorSubject<FeatureTicketModel[]>([]);

  constructor (private restApiService: RestApiService) { }

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

  createTicket(data: FeatureTicketModel) {
    this.restApiService.post(this.endPoint, data).subscribe((data) => {
      console.log(data);
    });
  }

}
