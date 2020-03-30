import { connect } from 'react-redux';
import PageHeader from '../components/PageHeader/PageHeader';

const mapState = () => {
  return {
    env: window.serverData.ontology.env,
    author: window.serverData.ontology.author
  };
};

export default connect(mapState)(PageHeader);
