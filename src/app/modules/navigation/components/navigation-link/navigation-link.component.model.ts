export interface NavigationLinkComponentModel {
  routerLink: string;
  linkText: string;
  linkIcon?: string;
  active?: boolean;
}

export enum RouteType {
  DASHBOARD = '/partner-portal/dashboard',
  ASSISTANCE_REQUESTS = '/partner-portal/assistance-requests',
  ASSISTANCE_REQUEST_SUPPORT_DASHBOARD = '/partner-portal/assistance-requests/support-dashboard',
  ASSISTANCE_REQUEST_FEATURE_REQUEST_DASHBOARD = '/partner-portal/assistance-requests/feature-request-dashboard',
}

export const ROUTE_MAPPER: { [key in string]: string[] } = {};

ROUTE_MAPPER[RouteType.DASHBOARD] = [
  '/partner-portal',
  '/partner-portal/dashboard'
];

ROUTE_MAPPER[RouteType.ASSISTANCE_REQUESTS] = [
  '/partner-portal/assistance-requests',
  '/partner-portal/assistance-requests/support-dashboard',
  '/partner-portal/assistance-requests/support-form',
  '/partner-portal/assistance-requests/feature-request-dashboard',
  '/partner-portal/assistance-requests/feature-request-form',
  '/partner-portal/assistance-requests/feature-ticket-view'
];

ROUTE_MAPPER[RouteType.ASSISTANCE_REQUEST_SUPPORT_DASHBOARD] = [
  '/partner-portal/assistance-requests',
  '/partner-portal/assistance-requests/support-dashboard',
  '/partner-portal/assistance-requests/support-form'
];

ROUTE_MAPPER[RouteType.ASSISTANCE_REQUEST_FEATURE_REQUEST_DASHBOARD] = [
  '/partner-portal/assistance-requests/feature-request-dashboard',
  '/partner-portal/assistance-requests/feature-request-form',
  '/partner-portal/assistance-requests/feature-ticket-view'
];
