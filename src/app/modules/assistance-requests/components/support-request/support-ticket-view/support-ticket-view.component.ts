import { SupportRequestService } from './../../../services/support-request/support-request.service';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { IconComponent } from '../../../../core/components/icon/icon.component';
import { ProgressBarComponent } from '../../../../core/components/progress-bar/progress-bar.component';
import { backIconConfig, previewLinkConfig, progressBarConfig } from './config';
import { ActivatedRoute } from '@angular/router';
import { SupportTicketModel } from '../../../models/support-ticket.model';

@Component({
  selector: 'app-support-ticket-view',
  standalone: true,
  imports: [MatToolbar, MatCardModule, IconComponent, ProgressBarComponent],
  templateUrl: './support-ticket-view.component.html',
  styleUrl: './support-ticket-view.component.scss'
})
export class SupportTicketViewComponent {
  backIconConfig = backIconConfig;
  progressBarConfig = progressBarConfig;
  previewLinkConfig = previewLinkConfig;

  ticketData!: SupportTicketModel;
  url: any;

  constructor (
    private route: ActivatedRoute,
    private supportRequestService: SupportRequestService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('id');
    this.supportRequestService.getTicket(id!).subscribe({
      next: (response) => {
        this.ticketData = response.data;
      }
    });
  }

  onPreview() {}

}
