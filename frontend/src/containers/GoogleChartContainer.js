import { connect } from 'react-redux';
import GoogleChart from '@components/GoogleChart';

const mapStateToProps = state => ({
  apiReady: state.apiReady
});

const GoogleChartContainer = connect(
  mapStateToProps,
  null
)(GoogleChart);

export default GoogleChartContainer;
