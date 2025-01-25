import { Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProgressBarComponentModel } from './progress-bar.component.model';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent {
  @Input() data!: ProgressBarComponentModel;
}
