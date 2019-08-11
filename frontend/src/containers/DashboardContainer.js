import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AppActions from '@store/actions';
import Dashboard from '@components/Dashboard';

const mapStateToProps = state => ({
  apiReady: state.apiReady,
  hasError: state.hasError
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch)
});

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default DashboardContainer;
