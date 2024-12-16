import { Component, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { TextareaComponentModel } from './textarea.component.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [MatInputModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss'
})
export class TextareaComponent {
  @Input() data!: TextareaComponentModel;
  @Input() formGroup!: FormGroup;
  @Input() formControl!: FormControl;
}
