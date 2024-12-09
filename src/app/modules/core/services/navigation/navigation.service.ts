import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  routeChange = new BehaviorSubject<string>('');

  constructor (private router: Router) {
    this.router.events.subscribe((data: any) => {
      this.routeChange.next(data.url);
    });
  }

  navigate(routerLink: string) {
    this.router.navigate([routerLink]);
  }
}
