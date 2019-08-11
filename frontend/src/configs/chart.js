const chart1 = {
  query: {
    'start-date': '7daysAgo',
    'end-date': 'yesterday',
    metrics: 'ga:sessions,ga:users',
    dimensions: 'ga:date'
  },
  chart: {
    type: 'LINE'

  }
};

const chart2 = {
  query: {
    'start-date': '7daysAgo',
    'end-date': 'yesterday',
    metrics: 'ga:sessions,ga:users',
    dimensions: 'ga:date'
  },
  chart: {
    type: 'TABLE'
  }
};

const chart3 = {
  query: {
    'start-date': '7daysAgo',
    'end-date': 'yesterday',
    metrics: 'ga:pageviews',
    dimensions: 'ga:pagePath'
  },
  chart: {
    type: 'TABLE'
  }
};

const chartConfigs = [chart1, chart2, chart3];

export default chartConfigs;
