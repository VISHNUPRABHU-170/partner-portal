import { BarChartComponentModel } from '../../../core/components/bar-chart/bar-chart.component.model';
import { ChartType, PieChartComponentModel } from '../../../core/components/pie-chart/pie-chart.component.model';

export const pieChartConfig: PieChartComponentModel = {
  title: '',
  chartType: ChartType.STANDARD,
  showInLegend: true,
  width: '350',
  height: '320',
  series: {
    type: 'pie',
    name: 'Tickets',
    data: [],
  },
  className: 'main',
};

export const barChartConfig: BarChartComponentModel = {
  title: '',
  series: ['To Do', 'In Progress', 'Completed'],
  data: [],
  colors: [],
  height: '320',
};
