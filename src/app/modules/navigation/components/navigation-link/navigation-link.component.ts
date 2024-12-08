import { Component, Input, OnInit } from '@angular/core';
import { NavigationLinkComponentModel, ROUTE_MAPPER } from './navigation-link.component.model';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-navigation-link',
  standalone: true,
  imports: [MatIconModule, CommonModule, RouterLink],
  templateUrl: './navigation-link.component.html',
  styleUrl: './navigation-link.component.scss'
})
export class NavigationLinkComponent implements OnInit {
  @Input() data!: NavigationLinkComponentModel;

  constructor (private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.subscribeToNavigation();
  }

  subscribeToNavigation() {
    this.navigationService.routeChange.subscribe((url: string) => {
      if (url) {
        if (ROUTE_MAPPER[this.data.routerLink].includes(url)) {
          this.data.active = true;
        } else {
          this.data.active = false;
        }
      }
    });
  }

  onClick() {
    this.navigationService.navigate(this.data.routerLink);
  }
}
