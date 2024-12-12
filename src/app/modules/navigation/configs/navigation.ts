import { NavigationLinkComponentModel } from "../components/navigation-link/navigation-link.component.model";
import { NavigationMainComponentModel } from "../components/navigation-main/navigation-main.component.model";

const dashboardNavLinkConfig: NavigationLinkComponentModel = {
  linkText: "Dashboard",
  linkIcon: "home",
  routerLink: "/partner-portal/dashboard"
};

const resourcesNavLinkConfig: NavigationLinkComponentModel = {
  linkText: "Resources",
  linkIcon: "home",
  routerLink: "dashboard"
};

const accountManagementNavLinkConfig: NavigationLinkComponentModel = {
  linkText: "Account Management",
  linkIcon: "home",
  routerLink: "dashboard"
};

const assistanceRequestNavLinkConfig: NavigationLinkComponentModel = {
  linkText: "Assistance & Requests",
  linkIcon: "support_agent",
  routerLink: "/partner-portal/assistance-requests"
};

const supportNavLinkConfig: NavigationLinkComponentModel = {
  linkText: "Support",
  linkIcon: "support",
  routerLink: "/partner-portal/assistance-requests/support-dashboard"
};

const featureRequestNavLinkConfig: NavigationLinkComponentModel = {
  linkText: "Feature Request",
  linkIcon: "post_add",
  routerLink: "/partner-portal/assistance-requests/feature-request-dashboard"
};



export const navigationConfig: NavigationMainComponentModel = {
  navLinks: [
    {
      navLink: dashboardNavLinkConfig
    },
    {
      navLink: assistanceRequestNavLinkConfig,
      subNavLink: {
        navLinks: [
          supportNavLinkConfig,
          featureRequestNavLinkConfig
        ]
      },
    }
  ]
}
