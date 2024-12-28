import { CenterTextModel, ChartSeriesModel, ChartType, PieChartComponentModel } from '../../components/pie-chart/pie-chart.component.model';
import { SeriesOptionsType } from 'highcharts';

export class ChartBuilderService {
  constructor () { }

  prepareChartConfig(config: PieChartComponentModel): Highcharts.Options {
    const baseConfig: Highcharts.Options = {
      chart: {
        type: 'pie',
        width: 270,
        height: 270,
      },
      title: {
        text: undefined,
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      accessibility: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          size: '100%',
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            distance: -30,
            format: '{point.name}',
            style: {
              fontSize: '12px',
            },
          },
        },
      },
      series: [],
    };
    this.prepareCharType(baseConfig, config.chartType);
    this.prepareChartSeries(baseConfig, config.series);
    if (config.centerText) {
      this.prepareCenterText(baseConfig, config.centerText);
    }
    return baseConfig;
  }

  prepareCharType(config: Highcharts.Options, chartType: ChartType): void {
    const plotOptions = config.plotOptions?.pie;
    if (plotOptions) {
      plotOptions.innerSize = chartType === ChartType.STANDARD ? '0%' : '85%';
    }
  }

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

  prepareCenterText(config: Highcharts.Options, centerText: CenterTextModel): void {
    config.chart = {
      ...config.chart,
      events: {
        render: function () {
          const chart = this as Highcharts.Chart & { customElements?: Highcharts.SVGElement[]; };
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
            x: (chart.plotLeft + chart.plotWidth / 2) - mainBBox.width / 2,
            y: (chart.plotTop + chart.plotHeight / 2) - 10,
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
            x: (chart.plotLeft + chart.plotWidth / 2) - subtitleBBox.width / 2,
            y: (chart.plotTop + chart.plotHeight / 2) + 25,
          });
          chart.customElements.push(subtitle);
        },
      },
    } as Highcharts.ChartOptions;
  }


}
