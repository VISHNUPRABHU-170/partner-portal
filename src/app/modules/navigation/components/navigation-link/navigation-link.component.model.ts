export interface NavigationLinkComponentModel {
  routerLink: string;
  linkText: string;
  linkIcon?: string;
  active?: boolean;
}

export enum RouteType {
  DASHBOARD = '/dashboard',
  ASSISTANCE_REQUESTS = '/assistance-requests',
  ASSISTANCE_REQUEST_SUPPORT_DASHBOARD = '/assistance-requests/support-dashboard',
  ASSISTANCE_REQUEST_FEATURE_REQUEST_DASHBOARD = '/assistance-requests/feature-request-dashboard',
}

export const ROUTE_MAPPER: { [key in string]: string[] } = {};

ROUTE_MAPPER[RouteType.DASHBOARD] = ['/', '/dashboard'];
ROUTE_MAPPER[RouteType.ASSISTANCE_REQUESTS] = [
  '/assistance-requests',
  '/assistance-requests/support-dashboard',
  '/assistance-requests/support-form',
  '/assistance-requests/feature-request-dashboard',
  '/assistance-requests/feature-request-form'
];
ROUTE_MAPPER[RouteType.ASSISTANCE_REQUEST_SUPPORT_DASHBOARD] = [
  '/assistance-requests',
  '/assistance-requests/support-dashboard',
  '/assistance-requests/support-form'
];
ROUTE_MAPPER[RouteType.ASSISTANCE_REQUEST_FEATURE_REQUEST_DASHBOARD] = [
  '/assistance-requests/feature-request-dashboard',
  '/assistance-requests/feature-request-form'
];




