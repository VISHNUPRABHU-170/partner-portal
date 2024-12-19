import { MatToolbarModule } from '@angular/material/toolbar';
import { Component } from '@angular/core';
import {
  awsChartConfig,
  azureChartConfig,
  createRequestButtonConfig,
  gcpChartConfig,
  othersChartConfig
} from './config';
import { ButtonComponent } from '../../../../core/components/button/button.component';
import { NavigationService } from '../../../../core/services/navigation/navigation.service';
import { ButtonComponentModel } from '../../../../core/components/button/button.component.model';
import { PieChartComponent } from '../../../../core/components/pie-chart/pie-chart.component';

@Component({
  selector: 'app-feature-request-dashboard',
  standalone: true,
  imports: [MatToolbarModule, ButtonComponent, PieChartComponent],
  templateUrl: './feature-request-dashboard.component.html',
  styleUrl: './feature-request-dashboard.component.scss'
})
export class FeatureRequestDashboardComponent {
  createRequestButtonConfig = createRequestButtonConfig;
  awsChartConfig = awsChartConfig;
  azureChartConfig = azureChartConfig;
  gcpChartConfig = gcpChartConfig;
  othersChartConfig = othersChartConfig;

  constructor(private navigationService: NavigationService) {}

  onCreateRequest(data: ButtonComponentModel) {
    this.navigationService.navigate(data.routerLink);
  }
}
