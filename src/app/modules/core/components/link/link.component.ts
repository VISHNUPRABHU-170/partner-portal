import { Component, Input, output } from '@angular/core';
import { LinkComponentModel } from './link.component.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {
  @Input() data!: LinkComponentModel;
  event = output();

  constructor(private router: Router) {}

  onClick() {
    if (this.data.routerLink) {
      this.router.navigate([this.data.routerLink]);
    } else {
      this.event.emit();
    }
  }
}
