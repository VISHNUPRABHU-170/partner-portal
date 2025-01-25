import { SupportRequestService } from './../../../services/support-request/support-request.service';
import { Component, DestroyRef, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { IconComponent } from '../../../../core/components/icon/icon.component';
import { ProgressBarComponent } from '../../../../core/components/progress-bar/progress-bar.component';
import { backIconConfig, previewLinkConfig, progressBarConfig } from './config';
import { ActivatedRoute } from '@angular/router';
import { SupportTicketModel } from '../../../models/support-ticket.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-support-ticket-view',
  standalone: true,
  imports: [
    MatToolbar,
    MatCardModule,
    IconComponent,
    ProgressBarComponent,
    DatePipe,
  ],
  templateUrl: './support-ticket-view.component.html',
  styleUrl: './support-ticket-view.component.scss',
})
export class SupportTicketViewComponent implements OnInit {
  backIconConfig = backIconConfig;
  progressBarConfig = progressBarConfig;
  previewLinkConfig = previewLinkConfig;

  ticketData!: SupportTicketModel;

  constructor(
    private route: ActivatedRoute,
    private supportRequestService: SupportRequestService,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('id');
    const Subscription = this.supportRequestService.getTicket(id!).subscribe({
      next: response => {
        this.ticketData = response.data;
      },
    });
    this.destroyRef.onDestroy(() => {
      Subscription?.unsubscribe();
    });
  }

  onPreview() {
    // TODO
  }
}
