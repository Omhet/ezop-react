import { connect } from 'react-redux';
import { RootState } from '../redux/types';
import InputBox from '../components/InputBox/InputBox';
import { Dispatch } from 'redux';
import { ExecutionStatus } from '../types';
import { queryFsa } from '../redux/modules/query';

const mapState = (state: RootState) => {
  const {
    query: { fontSize, value, error }
  } = state;

  return {
    name: 'Запрос',
    status: 'idle' as ExecutionStatus,
    fontSize,
    value,
    error
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  onChange: (value: string) => {
    dispatch(queryFsa.setValue(value));
  }
});

export default connect(mapState, mapDispatch)(InputBox);
