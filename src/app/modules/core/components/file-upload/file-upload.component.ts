import { Component, HostListener, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FileUploadComponentModel } from './file-upload.component.model';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [MatButtonModule, ReactiveFormsModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss',
})
export class FileUploadComponent {
  // Input property to accept file upload config from the parent component.
  @Input() data!: FileUploadComponentModel;

  // Input property for the parent form group, enabling reactive form integration.
  @Input() formGroup!: FormGroup;

  // Input property for the form control associated with this component.
  @Input() formControl!: FormControl;

  /**
   * Event listener to handle file input change events.
   * This method is triggered when the user selects a file. It emits the file data to the form control.
   */
  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    const file = event && event.item(0);
    if (file) {
      const fileData = {
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
      };
      this.formControl.setValue(JSON.stringify(fileData));
    }
  }
}
