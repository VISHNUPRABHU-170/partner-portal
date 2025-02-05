import { BarChartComponentModel } from '../../components/bar-chart/bar-chart.component.model';
import { CenterTextModel, ChartSeriesModel, ChartType, PieChartComponentModel } from '../../components/pie-chart/pie-chart.component.model';
import { SeriesOptionsType, XAxisOptions } from 'highcharts';
import { BAR_CHART_BASE_CONFIG, PIE_CHART_BASE_CONFIG } from '../../constants/chart';

/**
 * Service to build chart configurations dynamically for Highcharts.
 * This service provides methods to prepare configuration options
 * for different chart types like Pie Chart and Bar Chart.
 */
export class ChartBuilderService {
  /**
   * Prepares the configuration for a Pie Chart.
   * @param config - The configuration model for the Pie Chart.
   * @returns A Highcharts options object for the Pie Chart.
   */
  preparePieChartConfig(config: PieChartComponentModel): Highcharts.Options {
    const baseConfig = structuredClone(PIE_CHART_BASE_CONFIG);
    this.prepareCharType(baseConfig, config.chartType);
    this.prepareChartSeries(baseConfig, config.series);
    if (config.showInLegend) baseConfig.plotOptions!.pie!['showInLegend'] = true;
    if (config.centerText) this.prepareCenterText(baseConfig, config.centerText);
    if (config.width) baseConfig.chart!.width = config.width;
    if (config.height) baseConfig.chart!.height = config.height;
    return baseConfig;
  }

  /**
   * Prepares the configuration for a Bar Chart.
   * @param config - The configuration model for the Bar Chart.
   * @returns A Highcharts options object for the Bar Chart.
   */
  prepareBarChartConfig(config: BarChartComponentModel): Highcharts.Options {
    const baseConfig = structuredClone(BAR_CHART_BASE_CONFIG);
    baseConfig.series = config.data.map(
      (value, index) =>
        ({
          name: config.series[index],
          color: config.colors[index],
          data: [value],
        }) as SeriesOptionsType
    );
    (baseConfig.xAxis as XAxisOptions).categories = [''];
    if (config.width) baseConfig.chart!.width = config.width;
    if (config.height) baseConfig.chart!.height = config.height;
    return baseConfig;
  }

  /**
   * Prepares the chart type for Pie Charts.
   * Updates the plot options for innerSize based on the chart type.
   * @param config - Highcharts options object.
   * @param chartType - The type of the Pie Chart (STANDARD or DONUT).
   */
  prepareCharType(config: Highcharts.Options, chartType: ChartType): void {
    const plotOptions = config.plotOptions?.pie;
    if (plotOptions) {
      plotOptions.innerSize = chartType === ChartType.STANDARD ? '0%' : '85%';
    }
  }

  /**
   * Populates the series data for the chart.
   * @param config - Highcharts options object.
   * @param seriesData - Data model for the chart series.
   */
  prepareChartSeries(config: Highcharts.Options, seriesData: ChartSeriesModel): void {
    const series = {
      type: seriesData.type,
      name: seriesData.name,
      data: seriesData.data.length
        ? seriesData.data.map(item => ({
            name: item.name,
            y: item.value,
            color: item.color,
          }))
        : [{ name: '', y: 100, color: '#C7C7C7' }],
    };
    config.series = [series as SeriesOptionsType];
  }

  /**
   * Adds center text to the chart (specific to Pie Charts).
   * @param config - Highcharts options object.
   * @param centerText - Model containing title and subtitle for the center text.
   */
  prepareCenterText(config: Highcharts.Options, centerText: CenterTextModel): void {
    config.chart = {
      ...config.chart,
      events: {
        render: function () {
          const chart = this as Highcharts.Chart & {
            customElements?: Highcharts.SVGElement[];
          };
          if (!chart.customElements) {
            chart.customElements = [];
          }
          chart.customElements.forEach((el: Highcharts.SVGElement) => el.destroy());
          chart.customElements = [];
          const mainText = chart.renderer
            .text(centerText.title, chart.plotLeft + chart.plotWidth / 2, chart.plotTop + chart.plotHeight / 2)
            .css({
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#000000',
            })
            .attr({ zIndex: 5 })
            .add();
          const mainBBox = mainText.getBBox();
          mainText.attr({
            x: chart.plotLeft + chart.plotWidth / 2 - mainBBox.width / 2,
            y: chart.plotTop + chart.plotHeight / 2 - 10,
          });
          chart.customElements.push(mainText);
          const subtitle = chart.renderer
            .text(centerText.subTitle, chart.plotLeft + chart.plotWidth / 2, chart.plotTop + chart.plotHeight / 2 + 25)
            .css({
              fontSize: '16px',
              color: '#000000',
            })
            .attr({ zIndex: 5 })
            .add();
          const subtitleBBox = subtitle.getBBox();
          subtitle.attr({
            x: chart.plotLeft + chart.plotWidth / 2 - subtitleBBox.width / 2,
            y: chart.plotTop + chart.plotHeight / 2 + 25,
          });
          chart.customElements.push(subtitle);
        },
      },
    } as Highcharts.ChartOptions;
  }
}
