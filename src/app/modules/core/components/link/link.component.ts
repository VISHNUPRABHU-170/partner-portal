import { Component, Input, output } from '@angular/core';
import { LinkComponentModel } from './link.component.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {
  @Input() data!: LinkComponentModel;
  event = output();

  onClick() {
    console.log(this.data.routerLink);
    if (!this.data.routerLink) {
      this.event.emit();
    }
  }
}
