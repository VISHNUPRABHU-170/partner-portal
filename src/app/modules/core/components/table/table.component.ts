import { TitleCasePipe } from '@angular/common';
import { Component, Input, output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, TitleCasePipe, ProgressBarComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() tableData: any;
  @Input() columnsDef!: string[];
  tableEvent = output<any>();

  onRowClick(rowData: any) {
    this.tableEvent.emit(rowData);
  }
}
