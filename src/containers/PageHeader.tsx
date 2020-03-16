import { connect } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import PageHeader from '../components/PageHeader/PageHeader';

const mapState = (state: RootState) => {
  return {
    env: 'Ядро системы',
    author: 'admin'
  };
};

export default connect(mapState)(PageHeader);
