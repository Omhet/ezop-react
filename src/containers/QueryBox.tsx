import { connect } from 'react-redux';
import { RootState } from '../redux/types';
import InputBox from '../components/InputBox/InputBox';
import { Dispatch } from 'redux';
import { queryFsa } from '../redux/modules/query';

const mapState = (state: RootState) => {
  const {
    query: { fontSize, value, error, status }
  } = state;

  let statusText;
  if (status === 'error') {
    statusText = 'Ошибка выполнения запроса';
  } else if (status === 'success') {
    statusText = 'Запрос выполнен успешно';
  }

  return {
    name: 'Запрос',
    status,
    statusText,
    fontSize,
    value,
    error
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  onChange: (value: string) => {
    dispatch(queryFsa.setValue(value));
    dispatch(queryFsa.setStatus('idle'));
  }
});

export default connect(mapState, mapDispatch)(InputBox);
