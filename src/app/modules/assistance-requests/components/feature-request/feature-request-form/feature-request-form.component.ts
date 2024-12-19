import { backIconConfig, stepperConfig } from './config';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IconComponent } from '../../../../core/components/icon/icon.component';
import { MatCardModule } from '@angular/material/card';
import { StepperComponent } from '../../../../core/components/stepper/stepper.component';
import { FeatureTicketModel } from '../../../models/feature-ticket.model';
import { FeatureRequestService } from '../../../services/feature-request/feature-request.service';

@Component({
  selector: 'app-feature-request-form',
  standalone: true,
  imports: [MatToolbarModule, IconComponent, MatCardModule, StepperComponent],
  templateUrl: './feature-request-form.component.html',
  styleUrl: './feature-request-form.component.scss'
})
export class FeatureRequestFormComponent {
  backIconConfig = backIconConfig;
  stepperConfig = stepperConfig;

  constructor (private featureTicketService: FeatureRequestService) { }

  onSubmit(data: FeatureTicketModel) {
    this.featureTicketService.createTicket(data);
  }
}
