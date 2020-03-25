import { connect } from 'react-redux';
import { RootState } from '../redux/types';
import SideBox from '../components/SideBox/SideBox';

const mapState = (state: RootState) => {
  return {
    name: 'Логи онтологии',
    value: state.ontology.logs
  };
};

export default connect(mapState)(SideBox);
