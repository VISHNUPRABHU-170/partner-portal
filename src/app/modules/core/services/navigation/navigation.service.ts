import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService implements OnDestroy {
  private subscription: Subscription;

  routeChange = new BehaviorSubject<string>('partner-portal');

  constructor(private router: Router) {
    this.subscription = this.router.events.subscribe((data: any) => {
      this.routeChange.next(data?.url?.split('?')[0]);
    });
  }

  navigate(routerLink: string, queryParams?: any) {
    this.router.navigate([routerLink], { queryParams });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
