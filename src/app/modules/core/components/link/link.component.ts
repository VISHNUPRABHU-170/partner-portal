import { Component, Input } from '@angular/core';
import { LinkComponentModel } from './link.component.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {
  @Input() data!: LinkComponentModel;

  constructor(private router: Router) {}

  onClick() {
    this.router.navigate([this.data.routerLink]);
  }
}
