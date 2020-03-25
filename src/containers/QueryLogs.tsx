import { connect } from 'react-redux';
import { RootState } from '../redux/types';
import SideBox from '../components/SideBox/SideBox';

const mapState = (state: RootState) => {
  return {
    name: 'Логи запроса',
    value: state.query.logs
  };
};

export default connect(mapState)(SideBox);
