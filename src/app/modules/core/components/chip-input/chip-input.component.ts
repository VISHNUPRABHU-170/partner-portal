import { Component, Input } from '@angular/core';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { IconComponent } from '../icon/icon.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChipInputComponentModel } from './chip-input.component.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IconComponentModel } from '../icon/icon.component.model';

@Component({
  selector: 'app-chip-input',
  standalone: true,
  imports: [MatFormFieldModule, MatChipsModule, MatAutocompleteModule, IconComponent, ReactiveFormsModule],
  templateUrl: './chip-input.component.html',
  styleUrl: './chip-input.component.scss',
})
export class ChipInputComponent {
  // Input property to accept chip input config from the parent component.
  @Input() data!: ChipInputComponentModel;

  // Input property for the parent form group, enabling reactive form integration.
  @Input() formGroup!: FormGroup;

  // Input property for the form control associated with this component.
  @Input() formControl!: FormControl;

  // Configuration for the cancel icon displayed in chips.
  cancelIconConfig: IconComponentModel = { name: 'cancel' };

  // Array to store selected items for the chip input.
  selectedItems: string[] = [];

  /**
   * Removes a selected item from the chip list.
   * Updates both the `selectedItems` array and the associated `FormControl` value.
   * @param item - The item to be removed from the chip list.
   */
  remove(item: string): void {
    this.selectedItems = this.selectedItems.filter(currItem => item !== currItem);
  }

  /**
   * Handles the selection of an autocomplete option.
   * Adds the selected item to the chip list if it is not already present.
   * @param event - The event triggered when an autocomplete option is selected.
   */
  selected(event: MatAutocompleteSelectedEvent): void {
    const value = event.option.viewValue;
    if (!this.selectedItems.includes(value)) this.selectedItems.push(value);
  }
}
