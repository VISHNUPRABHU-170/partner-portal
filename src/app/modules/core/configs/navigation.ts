import { NavigationLinkComponentModel } from "../../navigation/components/navigation-link/navigation-link.component.model";
import { NavigationMainComponentModel } from "../../navigation/components/navigation-main/navigation-main.component.model";

const dashboardNavLinkConfig: NavigationLinkComponentModel = {
  linkText: "Dashboard",
  linkIcon: "home",
  routerLink: "/dashboard"
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
  routerLink: "/assistance-requests"
};

const supportNavLinkConfig: NavigationLinkComponentModel = {
  linkText: "Support",
  linkIcon: "support",
  routerLink: "/assistance-requests/support-dashboard"
};

const featureRequestNavLinkConfig: NavigationLinkComponentModel = {
  linkText: "Feature Request",
  linkIcon: "post_add",
  routerLink: "/assistance-requests/feature-request-dashboard"
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
