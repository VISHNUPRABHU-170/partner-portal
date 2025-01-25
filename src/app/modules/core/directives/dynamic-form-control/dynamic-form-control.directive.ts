import { Directive, Input, OnChanges, ViewContainerRef } from '@angular/core';
import { COMPONENT_TYPE_MAPPER, FormControlModel } from '../../components/form-builder/form-builder.component.model';
import { FormControl, FormGroup } from '@angular/forms';
import { InputComponent } from '../../components/input/input.component';

@Directive({
  selector: '[dynamicFormControl]',
  standalone: true,
})
export class DynamicFormControlDirective implements OnChanges {
  // Input property to accept the form control model, which defines metadata for the form control.
  @Input() data!: FormControlModel;

  // Input property to accept the form control model, which defines metadata for the form control.
  @Input() formGroup!: FormGroup;

  // Input property to provide a callback function to handle the "Enter" key press event.
  @Input() onEnter!: () => void;

  constructor(private viewContainerRef: ViewContainerRef) {}

  /**
   * Lifecycle hook triggered when input properties change.
   * Responsible for loading the dynamic component.
   */
  ngOnChanges(): void {
    this.loadComponent();
  }

  /**
   * Dynamically loads and initializes the component.
   * Assigns the necessary inputs (`data`, `formGroup`, `formControl`) to the created component.
   */
  private loadComponent(): void {
    this.viewContainerRef.clear();
    const componentRef = this.viewContainerRef.createComponent(COMPONENT_TYPE_MAPPER[this.data.componentType]);
    componentRef.instance.data = this.data.config;
    componentRef.instance.formGroup = this.formGroup;
    componentRef.instance.formControl = this.formGroup.get(this.data.name) as FormControl;

    // Check if the component is an InputComponent and Subscribe to enterKeyPress.
    if (componentRef.instance instanceof InputComponent) {
      componentRef.instance.enterKeyPress.subscribe(() => this.onEnter());
    }
  }
}
