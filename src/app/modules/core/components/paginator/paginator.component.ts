import { Component, Input, output } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {
  @Input() length!: number;
  @Input() pageSize = 5;
  @Input() pageIndex = 0;
  @Input() pageSizeOptions = [5, 10, 25];
  @Input() hidePageSize = false;
  @Input() showPageSizeOptions = true;
  @Input() showFirstLastButtons = true;
  @Input() disabled = false;
  event = output<PageEvent>();

  handlePageEvent(eve: PageEvent) {
    this.length = eve.length;
    this.pageSize = eve.pageSize;
    this.pageIndex = eve.pageIndex;
    this.event.emit(eve);
  }
}
