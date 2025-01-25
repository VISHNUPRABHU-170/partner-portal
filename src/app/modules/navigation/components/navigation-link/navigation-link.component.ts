import { Component, Input, OnInit, DestroyRef } from '@angular/core';
import { NavigationLinkComponentModel, ROUTE_MAPPER } from './navigation-link.component.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavigationService } from '../../../core/services/navigation/navigation.service';
import { IconComponent } from "../../../core/components/icon/icon.component";
import { IconComponentModel } from '../../../core/components/icon/icon.component.model';

@Component({
  selector: 'app-navigation-link',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent],
  templateUrl: './navigation-link.component.html',
  styleUrl: './navigation-link.component.scss'
})
export class NavigationLinkComponent implements OnInit {
  @Input() data!: NavigationLinkComponentModel;

  constructor (
    private navigationService: NavigationService,
    private destroyRef: DestroyRef
  ) { }

  ngOnInit(): void {
    this.subscribeToNavigation();
  }

  subscribeToNavigation() {
    const Subscription = this.navigationService.routeChange.subscribe((url: string) => {
      if (url) {
        if (ROUTE_MAPPER[this.data.routerLink]?.includes(url)) {
          this.data.active = true;
        } else {
          this.data.active = false;
        }
      }
    });
    this.destroyRef.onDestroy(() => {
      Subscription?.unsubscribe();
    });
  }

  prepareIconConfig(name: string): IconComponentModel {
    const iconConfig: IconComponentModel = { name };
    return iconConfig;
  }

  onClick() {
    this.navigationService.navigate(this.data.routerLink);
  }
}
