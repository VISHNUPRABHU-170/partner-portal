export interface PieChartComponentModel {
  title: string;
  chartType: ChartType;
  series: ChartSeriesModel;
  width?: string;
  height?: string;
  centerText?: CenterTextModel;
  showInLegend?: boolean;
  className?: string;
}

export interface CenterTextModel {
  title: string;
  subTitle: string;
}

export interface ChartSeriesModel {
  type: string;
  name: string;
  data: ChartSeriesDataModel[];
}

export interface ChartSeriesDataModel {
  name: string;
  value: number;
  color: string;
}

export enum ChartType {
  STANDARD = 'STANDARD',
  DOUGHNUT = 'DOUGHNUT',
}
