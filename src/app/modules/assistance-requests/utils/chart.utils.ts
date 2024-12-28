import { TICKET_STATUS_COLOR_MAPPER, TicketStatus } from './../models/support-ticket.model';
import { CenterTextModel, ChartSeriesDataModel, PieChartComponentModel } from "../../core/components/pie-chart/pie-chart.component.model";
import { CLOUD_COLOR_MAPPER, CloudProviders, FeatureTicketModel } from "../models/feature-ticket.model";

export class ChartUtils {

  updateChartConfig(providerTickets: number, totalTickets: number, cloudProvider: CloudProviders, chartConfig: PieChartComponentModel): PieChartComponentModel {
    const newChartConfig = { ...chartConfig };
    if (!totalTickets && !providerTickets) {
      newChartConfig.series.data = [this.prepareSeries(0, CLOUD_COLOR_MAPPER[cloudProvider].fails)];
      newChartConfig.centerText = this.prepareTitle('0', 'Submissions');
    }
    else if (totalTickets === providerTickets) {
      newChartConfig.series.data = [this.prepareSeries(totalTickets, CLOUD_COLOR_MAPPER[cloudProvider].success)];
      newChartConfig.centerText = this.prepareTitle(providerTickets + '', 'Submissions');
    }
    else if (!providerTickets) {
      newChartConfig.series.data = [this.prepareSeries(totalTickets, CLOUD_COLOR_MAPPER[cloudProvider].fails)];
      newChartConfig.centerText = this.prepareTitle('0', 'Submissions');
    } else {
      const providerTicketSeries = this.prepareSeries(providerTickets, CLOUD_COLOR_MAPPER[cloudProvider].success);
      const remainingTicketSeries = this.prepareSeries(totalTickets - providerTickets, CLOUD_COLOR_MAPPER[cloudProvider].fails);
      newChartConfig.series.data = [providerTicketSeries, remainingTicketSeries];
      newChartConfig.centerText = this.prepareTitle(providerTickets + '', 'Submissions');
    }
    return newChartConfig;
  }

  updateSupportChartConfig(statusCount: number, ticketStatus: TicketStatus, chartConfig: PieChartComponentModel): PieChartComponentModel {
    const newChartConfig = { ...chartConfig };
    newChartConfig.series.data = [this.prepareSeries(statusCount, TICKET_STATUS_COLOR_MAPPER[ticketStatus])];
    newChartConfig.centerText = this.prepareTitle(statusCount ? statusCount+'' : '0', 'Tickets');
    return newChartConfig;
  }

  prepareSeries(value: number, color: string): ChartSeriesDataModel { return { name: '', value, color }; };

  prepareTitle(title: string, subTitle: string): CenterTextModel { return { title, subTitle }; };

}
