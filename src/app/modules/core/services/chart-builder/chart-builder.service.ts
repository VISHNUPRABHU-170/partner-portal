import { CenterTextModel, ChartSeriesModel, ChartType, PieChartComponentModel } from '../../components/pie-chart/pie-chart.component.model';
import { SeriesOptionsType } from 'highcharts';

export class ChartBuilderService {

  basicConfig: Highcharts.Options = {
    chart: {
      type: 'pie',
      width: 270,
      height: 270,
    },
    title: {
      text: undefined
    },
    credits: {
      enabled: false
    },
    legend: {
      enabled: false
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
          }
        }
      }
    },
    series: []
  };

  constructor () { }

  prepareChartConfig(config: PieChartComponentModel) {
    this.prepareCharType(config.chartType);
    this.prepareChartSeries(config.series);
    if (config.centerText) this.prepareCenterText(config.centerText);
    return this.basicConfig;
  }

  prepareCharType(chartType: ChartType) {
    const plotOptions = this.basicConfig.plotOptions;
    if (plotOptions && plotOptions.pie) {
      if (chartType === ChartType.STANDARD) {
        plotOptions.pie.innerSize = '0%';
      } else {
        plotOptions.pie.innerSize = '85%';
      }
    }
  }

  prepareChartSeries(seriesData: ChartSeriesModel) {
    const series = {
      type: seriesData.type,
      name: seriesData.name,
      data: [] as { name: string; y: number; color: string; }[]
    };
    if (!seriesData.data.length) {
      const data = {
        name: '',
        y: 100,
        color: '#C7C7C7'
      };
      series.data.push(data);
    } else {
      seriesData.data.forEach((item) => {
        const data = {
          name: item.name,
          y: item.value,
          color: item.color
        };
        series.data.push(data);
      });
    }
    this.basicConfig.series?.push(series as SeriesOptionsType);
  }

  prepareCenterText(centerText: CenterTextModel) {
    this.basicConfig.chart = {
      ...this.basicConfig.chart,
      events: {
        load: function () {
          const chart = this;
          const numberText = chart.renderer.text(centerText.title, chart.plotLeft + chart.plotWidth / 2, chart.plotTop + chart.plotHeight / 2)
            .css({
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#000000'
            })
            .attr({
              zIndex: 5
            })
            .add();

          const numberBBox = numberText.getBBox();
          numberText.attr({
            x: (chart.plotLeft + chart.plotWidth / 2) - (numberBBox.width / 2),
            y: (chart.plotTop + chart.plotHeight / 2) - 10
          });

          const submissionsText = chart.renderer.text(centerText.subTitle, chart.plotLeft + chart.plotWidth / 2, chart.plotTop + chart.plotHeight / 2 + 25) // Adjust position below the number
            .css({
              fontSize: '16px',
              color: '#000000'
            })
            .attr({
              zIndex: 5
            })
            .add();

          const submissionsBBox = submissionsText.getBBox();
          submissionsText.attr({
            x: (chart.plotLeft + chart.plotWidth / 2) - (submissionsBBox.width / 2),
            y: (chart.plotTop + chart.plotHeight / 2) + 25
          });
        }
      }
    };
  }
}
