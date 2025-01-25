import { Component, Input } from '@angular/core';
import { ChipComponentModel } from './chip.component.model';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss',
})
export class ChipComponent {
  @Input() data!: ChipComponentModel;
}
