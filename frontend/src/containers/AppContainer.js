import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AppActions from '@store/actions';
import App from '@/App';

const mapStateToProps = state => ({
  apiReady: state.apiReady
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch)
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
