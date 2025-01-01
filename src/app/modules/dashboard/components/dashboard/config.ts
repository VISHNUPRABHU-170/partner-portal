import { ChartType, PieChartComponentModel } from "../../../core/components/pie-chart/pie-chart.component.model";

export const supportChartConfig1: PieChartComponentModel = {
  title: 'TICKET STATUS',
  chartType: ChartType.STANDARD,
  showInLegend: true,
  series: {
    type: 'pie',
    name: 'Tickets',
    data: []
  }
};
