import { Component, Input, output } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
})
export class PaginatorComponent {
  // Input property to specify the total number of items (length) for pagination.
  @Input() length!: number;

  // Input property to specify the number of items displayed per page (default is 5).
  @Input() pageSize = 5;

  // Input property to specify the current page index (default is 0).
  @Input() pageIndex = 0;

  // Input property to define available page size options for the user.
  @Input() pageSizeOptions = [5, 10, 25];

  // Input property to determine if the page size selector should be hidden.
  @Input() hidePageSize = false;

  // Input property to specify whether page size options should be displayed.
  @Input() showPageSizeOptions = true;

  // Input property to specify if first and last page buttons should be shown.
  @Input() showFirstLastButtons = true;

  // Input property to disable pagination controls.
  @Input() disabled = false;

  // Output event to emit the PageEvent when the page is changed.
  event = output<PageEvent>();

  /**
   * Handles page change events when the user interacts with the paginator.
   * Updates the pagination properties and emits the updated PageEvent.
   * @param eve The PageEvent containing updated pagination values.
   */
  handlePageEvent(eve: PageEvent): void {
    this.length = eve.length;
    this.pageSize = eve.pageSize;
    this.pageIndex = eve.pageIndex;
    this.event.emit(eve);
  }
}
