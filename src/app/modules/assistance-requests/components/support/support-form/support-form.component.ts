import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { backIconConfig } from './config';
import { IconComponent } from '../../../../core/components/icon/icon.component';

@Component({
  selector: 'app-support-form',
  standalone: true,
  imports: [MatToolbarModule, IconComponent],
  templateUrl: './support-form.component.html',
  styleUrl: './support-form.component.scss'
})
export class SupportFormComponent {
  backIconConfig = backIconConfig;
}
