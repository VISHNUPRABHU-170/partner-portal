import { Injectable } from '@angular/core';
import { FeatureTicketModel } from '../../models/feature-ticket.model';
import { RestApiService } from '../../../core/services/rest-api/rest-api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureRequestService {
  endPoint = 'feature';
  ticketBehaviorSubject = new BehaviorSubject<FeatureTicketModel[]>([]);

  constructor (private restApiService: RestApiService) { }

  getAllTicket() {
    this.restApiService.get(this.endPoint).subscribe(
      {
        next: (data: FeatureTicketModel[]) => {
          this.ticketBehaviorSubject.next(data);
        },
        error: (error: any) => {

        }
      }
    );
  }

  createTicket(data: FeatureTicketModel) {
    this.restApiService.post(this.endPoint, data).subscribe((data) => {
      console.log(data);
    });
  }

}
