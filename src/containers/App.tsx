import { connect } from 'react-redux';
import { RootState } from '../redux/types';
import App from '../components/App/App';

const mapState = (state: RootState) => {
  return {
    showOntologyLogs: window.serverData.ontology.isDraft
  };
};

export default connect(mapState)(App);
