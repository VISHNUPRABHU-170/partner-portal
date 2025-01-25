import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService implements OnDestroy {
  // Subscription object to manage the router event subscription.
  private subscription: Subscription;

  // BehaviorSubject to hold and emit the current route change.
  routeChange = new BehaviorSubject<string>('partner-portal');

  constructor(private router: Router) {
    // Subscribing to router events to track navigation changes.
    this.subscription = this.router.events.subscribe((data: any) => {
      // Emit the current URL (excluding query parameters) on route change.
      this.routeChange.next(data?.url?.split('?')[0]);
    });
  }

  /**
   * Navigates to the specified route with optional query parameters.
   * @param routerLink - The route to navigate to.
   * @param queryParams - An optional object containing query parameters.
   */
  navigate(routerLink: string, queryParams?: any): void {
    this.router.navigate([routerLink], { queryParams });
  }

  /**
   * Lifecycle hook to clean up subscriptions when the service is destroyed.
   */
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
