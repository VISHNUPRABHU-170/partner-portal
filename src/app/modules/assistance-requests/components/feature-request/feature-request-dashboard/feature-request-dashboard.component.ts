import { MatToolbarModule } from '@angular/material/toolbar';
import { Component } from '@angular/core';
import { createRequestButtonConfig } from './config';
import { ButtonComponent } from '../../../../core/components/button/button.component';

@Component({
  selector: 'app-feature-request-dashboard',
  standalone: true,
  imports: [MatToolbarModule, ButtonComponent],
  templateUrl: './feature-request-dashboard.component.html',
  styleUrl: './feature-request-dashboard.component.scss'
})
export class FeatureRequestDashboardComponent {
  createRequestButtonConfig = createRequestButtonConfig;
}
