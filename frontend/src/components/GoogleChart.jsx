import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const GoogleChart = ({ chartOptions, viewId }) => {
  let chartWrapper = null;

  // Init chart
  useEffect(() => {
    const options = {
      ...chartOptions,
      chart: {
        ...chartOptions.chart,
        container: chartWrapper,
        options: {
          width: '100%'
        }
      },
      query: {
        ...chartOptions.query,
        ids: `ga:${viewId}`
      }
    };

    const chart = new window.gapi.analytics.googleCharts.DataChart(options);
    console.log('useEffect chart', chart);
    chart.execute();
  }, []);

  return (
    <div ref={(node) => { chartWrapper = node; }} />
  );
};

GoogleChart.propTypes = {
  chartOptions: PropTypes.object.isRequired,
  viewId: PropTypes.string.isRequired
};

export default GoogleChart;
