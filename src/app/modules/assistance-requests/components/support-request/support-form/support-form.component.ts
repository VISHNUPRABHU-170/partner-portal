import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { backIconConfig, stepperConfig } from './config';
import { IconComponent } from '../../../../core/components/icon/icon.component';
import { MatCardModule } from '@angular/material/card';
import { StepperComponent } from '../../../../core/components/stepper/stepper.component';
import { UploadComponent } from '../../../../core/components/upload/upload.component';

@Component({
  selector: 'app-support-form',
  standalone: true,
  imports: [MatToolbarModule, IconComponent, MatCardModule, StepperComponent, UploadComponent],
  templateUrl: './support-form.component.html',
  styleUrl: './support-form.component.scss'
})
export class SupportFormComponent {
  backIconConfig = backIconConfig;
  stepperConfig = stepperConfig;
}
