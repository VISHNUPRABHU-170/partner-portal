import { Component, Input } from '@angular/core';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { IconComponent } from '../icon/icon.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChipInputComponentModel } from './chip-input.component.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chip-input',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatChipsModule,
    MatAutocompleteModule,
    IconComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './chip-input.component.html',
  styleUrl: './chip-input.component.scss',
})
export class ChipInputComponent {
  @Input() data!: ChipInputComponentModel;
  @Input() formGroup!: FormGroup;
  @Input() formControl!: FormControl;

  selectedItems: string[] = [];

  remove(item: string): void {
    this.selectedItems = this.selectedItems.filter(
      currItem => item !== currItem
    );
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const value = event.option.viewValue;
    if (!this.selectedItems.includes(value)) this.selectedItems.push(value);
  }
}
