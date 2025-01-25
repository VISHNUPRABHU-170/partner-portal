import { Component, DestroyRef, OnInit } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { ActivatedRoute } from '@angular/router';
import { backIconConfig, progressBarConfig } from './config';
import { IconComponent } from '../../../../core/components/icon/icon.component';
import { FeatureRequestService } from '../../../services/feature-request/feature-request.service';
import { ProgressBarComponent } from '../../../../core/components/progress-bar/progress-bar.component';
import { MatCardModule } from '@angular/material/card';
import { FeatureTicketModel } from '../../../models/feature-ticket.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-feature-ticket-view',
  standalone: true,
  imports: [MatToolbar, MatCardModule, IconComponent, ProgressBarComponent, DatePipe],
  templateUrl: './feature-ticket-view.component.html',
  styleUrl: './feature-ticket-view.component.scss',
})
export class FeatureTicketViewComponent implements OnInit {
  backIconConfig = backIconConfig;
  progressBarConfig = progressBarConfig;

  ticketData!: FeatureTicketModel;

  constructor(
    private route: ActivatedRoute,
    private featureRequestService: FeatureRequestService,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('id');
    const Subscription = this.featureRequestService.getTicket(id!).subscribe({
      next: response => {
        this.ticketData = response.data;
      },
    });
    this.destroyRef.onDestroy(() => {
      Subscription?.unsubscribe();
    });
  }
}
