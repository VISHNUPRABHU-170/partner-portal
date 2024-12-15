import { MatToolbarModule } from '@angular/material/toolbar';
import { Component } from '@angular/core';
import { createRequestButtonConfig } from './config';
import { ButtonComponent } from '../../../../core/components/button/button.component';
import { NavigationService } from '../../../../core/services/navigation/navigation.service';
import { ButtonComponentModel } from '../../../../core/components/button/button.component.model';

@Component({
  selector: 'app-feature-request-dashboard',
  standalone: true,
  imports: [MatToolbarModule, ButtonComponent],
  templateUrl: './feature-request-dashboard.component.html',
  styleUrl: './feature-request-dashboard.component.scss'
})
export class FeatureRequestDashboardComponent {
  createRequestButtonConfig = createRequestButtonConfig;

  constructor(private navigationService: NavigationService) {}

  onCreateRequest(data: ButtonComponentModel) {
    this.navigationService.navigate(data.routerLink);
  }
}
