import { CenterTextModel, ChartSeriesDataModel, PieChartComponentModel } from "../../core/components/pie-chart/pie-chart.component.model";

export class ChartUtils {

  updateChartConfig(chartData: any, centerText: any, chartConfig: PieChartComponentModel): PieChartComponentModel {
    const newChartConfig = { ...chartConfig };
    newChartConfig.series.data = this.prepareSeriesData(chartData);
    if (centerText) newChartConfig.centerText = this.prepareTitle(centerText.value, centerText.label);
    return newChartConfig;
  }

  private prepareSeriesData(chartData: ChartSeriesDataModel[]): ChartSeriesDataModel[] {
    return chartData.map(data => this.prepareSeries(data.name, data.value, data.color));
  }

  private prepareSeries(name: string = '', value: number, color: string): ChartSeriesDataModel { return { name, value, color }; };

  private prepareTitle(title: string, subTitle: string): CenterTextModel { return { title, subTitle }; };

}
