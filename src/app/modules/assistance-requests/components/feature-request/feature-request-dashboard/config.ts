import { ButtonComponentModel } from "../../../../core/components/button/button.component.model";
import { ChartType, PieChartComponentModel } from "../../../../core/components/pie-chart/pie-chart.component.model";

export const createRequestButtonConfig: ButtonComponentModel = {
  label: 'Create a Request',
  routerLink: '/partner-portal/assistance-requests/feature-request-form'
};

export const awsChartConfig: PieChartComponentModel = {
  title: 'AWS',
  chartType: ChartType.DOUGHNUT,
  series: {
    type: 'pie',
    name: 'Ticket Submissions',
    data: [
      { name: '', value: 60, color: '#5FD198' },
      { name: '', value: 40, color: '#FAD27D' },
    ],
  },
  centerText: {
    title: '60',
    subTitle: 'Submissions'
  }
};

export const azureChartConfig: PieChartComponentModel = {
  title: 'AZURE',
  chartType: ChartType.DOUGHNUT,
  series: {
    type: 'pie',
    name: 'Ticket Submissions',
    data: [
      { name: '', value: 90, color: '#5FD198' },
      { name: '', value: 10, color: '#2FC8EB' },
    ],
  },
  centerText: {
    title: '90',
    subTitle: 'Submissions'
  }
};

export const gcpChartConfig: PieChartComponentModel = {
  title: 'GCP',
  chartType: ChartType.DOUGHNUT,
  series: {
    type: 'pie',
    name: 'Ticket Submissions',
    data: [
      { name: '', value: 30, color: '#5FD198' },
      { name: '', value: 70, color: '#EB6253' },
    ],
  },
  centerText: {
    title: '30',
    subTitle: 'Submissions'
  }
};

export const othersChartConfig: PieChartComponentModel = {
  title: 'Others',
  chartType: ChartType.DOUGHNUT,
  series: {
    type: 'pie',
    name: 'Ticket Submissions',
    data: [
      { name: '', value: 45, color: '#5FD198' },
      { name: '', value: 55, color: '#C7C7C7' },
    ],
  },
  centerText: {
    title: '45',
    subTitle: 'Submissions'
  }
};
