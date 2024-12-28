import { ButtonComponentModel } from "../../../../core/components/button/button.component.model";
import { ChartType, PieChartComponentModel } from "../../../../core/components/pie-chart/pie-chart.component.model";

export const createRequestButtonConfig: ButtonComponentModel = {
  label: 'Create a Request',
  routerLink: '/partner-portal/assistance-requests/support-form'
};

export const toDoTicketChartConfig: PieChartComponentModel = {
  title: 'TO DO',
  chartType: ChartType.DOUGHNUT,
  series: {
    type: 'pie',
    name: 'Tickets',
    data: [],
  },
  centerText: {
    title: '0',
    subTitle: 'Tickets'
  }
};

export const inProgressTicketChartConfig: PieChartComponentModel = {
  title: 'IN PROGRESS',
  chartType: ChartType.DOUGHNUT,
  series: {
    type: 'pie',
    name: 'Tickets',
    data: [],
  },
  centerText: {
    title: '0',
    subTitle: 'Tickets'
  }
};

export const resolvedTicketChartConfig: PieChartComponentModel = {
  title: 'COMPLETED',
  chartType: ChartType.DOUGHNUT,
  series: {
    type: 'pie',
    name: 'Tickets',
    data: [],
  },
  centerText: {
    title: '0',
    subTitle: 'Tickets'
  }
};

export const totalTicketChartConfig: PieChartComponentModel = {
  title: 'TOTAL',
  chartType: ChartType.DOUGHNUT,
  series: {
    type: 'pie',
    name: 'Tickets',
    data: [],
  },
  centerText: {
    title: '0',
    subTitle: 'Tickets'
  }
};
