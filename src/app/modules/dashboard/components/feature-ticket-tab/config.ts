import {
  ChartType,
  PieChartComponentModel,
} from '../../../core/components/pie-chart/pie-chart.component.model';

export const highPriorityChartConfig: PieChartComponentModel = {
  title: 'Priority',
  chartType: ChartType.DOUGHNUT,
  series: {
    type: 'pie',
    name: 'Tickets',
    data: [],
  },
  centerText: {
    title: '0',
    subTitle: 'High',
  },
  width: '200',
  height: '200',
  className: 'tab-chart',
};

export const mediumPriorityChartConfig: PieChartComponentModel = {
  title: 'Priority',
  chartType: ChartType.DOUGHNUT,
  series: {
    type: 'pie',
    name: 'Tickets',
    data: [],
  },
  centerText: {
    title: '0',
    subTitle: 'Medium',
  },
  width: '200',
  height: '200',
  className: 'tab-chart',
};

export const lowPriorityChartConfig: PieChartComponentModel = {
  title: 'Priority',
  chartType: ChartType.DOUGHNUT,
  series: {
    type: 'pie',
    name: 'Tickets',
    data: [],
  },
  centerText: {
    title: '0',
    subTitle: 'Low',
  },
  width: '200',
  height: '200',
  className: 'tab-chart',
};
