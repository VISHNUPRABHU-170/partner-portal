export const PIE_CHART_BASE_CONFIG: Highcharts.Options = {
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
  accessibility: {
    enabled: false
  },
  legend: {
    enabled: true,
    align: 'center',
    verticalAlign: 'bottom',
    layout: 'horizontal',
    itemStyle: {
      fontSize: '12px'
    }
  },
  plotOptions: {
    pie: {
      size: '100%',
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false,
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

export const BAR_CHART_BASE_CONFIG: Highcharts.Options = {
  chart: {
    type: 'column',
    width: '350'
  },
  title: {
    text: undefined
  },
  credits: {
    enabled: false
  },
  accessibility: {
    enabled: false
  },
  xAxis: {
    labels: {
      enabled: false
    },
    categories: []
  },
  yAxis: {
    title: {
      text: ''
    },
    labels: {
      enabled: false
    },
    gridLineWidth: 0
  },
  plotOptions: {
    column: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false,
        style: {
          fontSize: '12px'
        }
      },
      pointPadding: 0.25,
      groupPadding: 0.1
    }
  },
  series: []
};
