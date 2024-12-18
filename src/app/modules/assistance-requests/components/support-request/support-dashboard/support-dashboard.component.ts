import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { createRequestButtonConfig } from './config';
import { ButtonComponent } from '../../../../core/components/button/button.component';
import { NavigationService } from '../../../../core/services/navigation/navigation.service';
import { ButtonComponentModel } from '../../../../core/components/button/button.component.model';

@Component({
  selector: 'app-support-dashboard',
  standalone: true,
  imports: [MatToolbarModule, ButtonComponent],
  templateUrl: './support-dashboard.component.html',
  styleUrl: './support-dashboard.component.scss'
})
export class SupportDashboardComponent {
  createRequestButtonConfig = createRequestButtonConfig;

  constructor (private navigationService: NavigationService) { }

  onCreateRequest(data: ButtonComponentModel) {
    this.navigationService.navigate(data.routerLink);
  }
}
