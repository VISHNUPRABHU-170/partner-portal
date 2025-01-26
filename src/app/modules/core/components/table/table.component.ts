import { TitleCasePipe } from '@angular/common';
import { Component, Input, output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, TitleCasePipe, ProgressBarComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  // Input property to accept table data from the parent component.
  @Input() tableData: any;

  // Input property to accept column definitions for the table.
  @Input() columnsDef!: string[];

  // Input property to accept loading status.
  @Input() loading = true;

  // Output property to emit the selected row's data to the parent component.
  tableEvent = output<any>();

  /**
   * Handles the row click event. Emits the row data to the parent component.
   * @param rowData The data associated with the clicked row.
   */
  onRowClick(rowData: any): void {
    this.tableEvent.emit(rowData);
  }
}
