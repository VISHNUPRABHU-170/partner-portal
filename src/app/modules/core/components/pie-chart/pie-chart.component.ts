import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PieChartComponentModel } from './pie-chart.component.model';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartBuilderService } from '../../services/chart-builder/chart-builder.service';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [MatCardModule, HighchartsChartModule],
  providers: [ChartBuilderService],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent {
  @Input() chartConfig!: PieChartComponentModel;

  Highcharts = Highcharts;
  chartData!: Highcharts.Options;

  constructor (private chartBuilderService: ChartBuilderService) {}

  ngOnInit() {
    this.chartData = this.chartBuilderService.prepareChartConfig(this.chartConfig) as Highcharts.Options;
  }

}
