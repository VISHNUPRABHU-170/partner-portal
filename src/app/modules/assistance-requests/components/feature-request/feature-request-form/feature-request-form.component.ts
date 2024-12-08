import { backIconConfig } from './config';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IconComponent } from '../../../../core/components/icon/icon.component';

@Component({
  selector: 'app-feature-request-form',
  standalone: true,
  imports: [MatToolbarModule, IconComponent],
  templateUrl: './feature-request-form.component.html',
  styleUrl: './feature-request-form.component.scss'
})
export class FeatureRequestFormComponent {
  backIconConfig = backIconConfig;
}
