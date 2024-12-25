import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { ActivatedRoute } from '@angular/router';
import { backIconConfig, progressBarConfig } from './config';
import { IconComponent } from '../../../../core/components/icon/icon.component';
import { FeatureRequestService } from '../../../services/feature-request/feature-request.service';

@Component({
  selector: 'app-feature-ticket-view',
  standalone: true,
  imports: [MatToolbar, IconComponent],
  templateUrl: './feature-ticket-view.component.html',
  styleUrl: './feature-ticket-view.component.scss'
})
export class FeatureTicketViewComponent {
  backIconConfig = backIconConfig;
  progressBarConfig = progressBarConfig;

  ticketData: any;

  constructor (
    private route: ActivatedRoute,
    private featureRequestService: FeatureRequestService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('id');
    this.featureRequestService.getTicket(id!).subscribe({
      next: (response) => {
        this.ticketData = response.data;
      }
    });
  }
}
