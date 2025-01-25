import { Component, Input, OnChanges } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartBuilderService } from '../../services/chart-builder/chart-builder.service';
import Highcharts from 'highcharts';
import { BarChartComponentModel } from './bar-chart.component.model';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [HighchartsChartModule, MatCardModule],
  providers: [ChartBuilderService],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent implements OnChanges {
  @Input() chartConfig!: BarChartComponentModel;

  Highcharts = Highcharts;

  chartData!: Highcharts.Options;
  chartInstance: Highcharts.Chart | undefined;

  constructor (private chartBuilderService: ChartBuilderService) {}

  ngOnChanges(): void {
    this.chartData = {
      ...this.chartBuilderService.prepareBarChartConfig(this.chartConfig)
    } as Highcharts.Options;
  }
}
