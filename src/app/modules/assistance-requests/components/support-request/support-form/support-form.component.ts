import { SupportRequestService } from './../../../services/support-request/support-request.service';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { backIconConfig, stepperConfig } from './config';
import { IconComponent } from '../../../../core/components/icon/icon.component';
import { MatCardModule } from '@angular/material/card';
import { StepperComponent } from '../../../../core/components/stepper/stepper.component';
import { SupportTicketModel } from '../../../models/support-ticket.model';

@Component({
  selector: 'app-support-form',
  standalone: true,
  imports: [MatToolbarModule, IconComponent, MatCardModule, StepperComponent],
  templateUrl: './support-form.component.html',
  styleUrl: './support-form.component.scss'
})
export class SupportFormComponent {
  backIconConfig = backIconConfig;
  stepperConfig = stepperConfig;

  constructor (
    private supportRequestService: SupportRequestService
  ) { }

  onSubmit(data: SupportTicketModel) {
    this.supportRequestService.createTicket(data)
  }
}
