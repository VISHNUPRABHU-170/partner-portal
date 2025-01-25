import { ButtonComponentModel } from '../../../../core/components/button/button.component.model';
import { ChartType, PieChartComponentModel } from '../../../../core/components/pie-chart/pie-chart.component.model';

export const createRequestButtonConfig: ButtonComponentModel = {
  label: 'Create a Request',
  routerLink: '/partner-portal/assistance-requests/feature-request-form',
};

export const awsChartConfig: PieChartComponentModel = {
  title: 'AWS',
  chartType: ChartType.DOUGHNUT,
  series: {
    type: 'pie',
    name: 'Tickets',
    data: [],
  },
  centerText: {
    title: '0',
    subTitle: 'Submissions',
  },
  className: 'sub',
};

export const azureChartConfig: PieChartComponentModel = {
  title: 'AZURE',
  chartType: ChartType.DOUGHNUT,
  series: {
    type: 'pie',
    name: 'Tickets',
    data: [],
  },
  centerText: {
    title: '0',
    subTitle: 'Submissions',
  },
  className: 'sub',
};

export const gcpChartConfig: PieChartComponentModel = {
  title: 'GCP',
  chartType: ChartType.DOUGHNUT,
  series: {
    type: 'pie',
    name: 'Tickets',
    data: [],
  },
  centerText: {
    title: '0',
    subTitle: 'Submissions',
  },
  className: 'sub',
};

export const othersChartConfig: PieChartComponentModel = {
  title: 'Others',
  chartType: ChartType.DOUGHNUT,
  series: {
    type: 'pie',
    name: 'Tickets',
    data: [],
  },
  centerText: {
    title: '0',
    subTitle: 'Submissions',
  },
  className: 'sub',
};
