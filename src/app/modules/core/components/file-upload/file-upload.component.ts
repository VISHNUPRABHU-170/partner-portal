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
  @Input() data!: FileUploadComponentModel;
  @Input() formGroup!: FormGroup;
  @Input() formControl!: FormControl;

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
