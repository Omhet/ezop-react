import { connect } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import InputBox from '../components/InputBox/InputBox';
import { Dispatch } from 'redux';
import { ExecutionStatus } from '../types';

const mapState = (state: RootState) => {
  return {
    name: 'Запрос',
    status: 'idle' as ExecutionStatus
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  onChange: (value: string) => {
    console.log(value);
  }
});

export default connect(mapState, mapDispatch)(InputBox);
