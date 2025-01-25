import { NavigationLinkComponentModel } from '../navigation-link/navigation-link.component.model';
import { NavigationSubComponentModel } from '../navigation-sub/navigation-sub.component.model';

export interface NavigationMainComponentModel {
  navLinks: NavigationMainModel[];
}

export interface NavigationMainModel {
  navLink: NavigationLinkComponentModel;
  subNavLink?: NavigationSubComponentModel;
}
