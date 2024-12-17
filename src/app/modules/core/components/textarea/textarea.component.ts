import { Component, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { TextareaComponentModel } from './textarea.component.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [MatInputModule, ReactiveFormsModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss'
})
export class TextareaComponent {
  @Input() data!: TextareaComponentModel;
  @Input() formGroup!: FormGroup;
  @Input() formControl!: FormControl;
}
