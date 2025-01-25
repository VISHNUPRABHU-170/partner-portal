import { Component, Input } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { SelectComponentModel } from './select.component.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [MatSelectModule, ReactiveFormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {
  @Input() data!: SelectComponentModel;
  @Input() formGroup!: FormGroup;
  @Input() formControl!: FormControl;
}
