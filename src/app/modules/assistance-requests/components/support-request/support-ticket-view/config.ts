import { IconComponentModel } from '../../../../core/components/icon/icon.component.model';
import { LinkComponentModel } from '../../../../core/components/link/link.component.model';
import { ProgressBarComponentModel } from '../../../../core/components/progress-bar/progress-bar.component.model';

export const backIconConfig: IconComponentModel = {
  name: 'arrow_back',
  routerLink: '/partner-portal/assistance-requests/support-dashboard',
};

export const progressBarConfig: ProgressBarComponentModel = {
  diameter: 60,
  className: 'spinner-center',
};

export const previewLinkConfig: LinkComponentModel = {
  label: 'Preview',
};
