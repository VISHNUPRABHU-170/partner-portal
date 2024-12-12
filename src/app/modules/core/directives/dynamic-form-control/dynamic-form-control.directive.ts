import { Directive, Input, ViewContainerRef } from '@angular/core';
import { COMPONENT_TYPE_MAPPER, FormControlModel } from '../../components/form-builder/form-builder.component.model';
import { FormControl, FormGroup } from '@angular/forms';

@Directive({
  selector: '[dynamicFormControl]',
  standalone: true
})
export class DynamicFormControlDirective {
  @Input() data!: FormControlModel;
  @Input() formGroup!: FormGroup;

  constructor (private viewContainerRef: ViewContainerRef) { }

  ngOnChanges(): void {
    this.loadComponent();
  }

  private loadComponent(): void {
    this.viewContainerRef.clear();
    const componentRef = this.viewContainerRef.createComponent(COMPONENT_TYPE_MAPPER[this.data.componentType]);
    componentRef.instance.data = this.data.config;
    componentRef.instance.formGroup = this.formGroup;
    componentRef.instance.formControl = this.formGroup.get(this.data.name) as FormControl;
  }

}
