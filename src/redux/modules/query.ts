import { createAction } from 'typesafe-actions';
import { withState } from '../helpers/typesafe-reducer';
import { changeFontSize } from '../helpers/misc';
import { ThunkAction } from 'redux-thunk';
import { RootState, Query } from '../types';
import { requestRunCommand, parseResponse } from '../helpers/request';
import { ExecutionStatus } from '../../types';

const fsa = {
  increaseFont: createAction('QUERY/INCREASE_FONT')<undefined>(),
  decreaseFont: createAction('QUERY/DECREASE_FONT')<undefined>(),
  setValue: createAction('QUERY/SET_VALUE')<string>(),
  setStatus: createAction('QUERY/SET_STATUS')<ExecutionStatus>(),
  setQuery: createAction('QUERY/SET_QUERY')<Query>(),
  clearQuery: createAction('QUERY/CLEAR_QUERY')<undefined>()
};
export const queryFsa = fsa;

interface State extends Query {
  fontSize: number;
}

const initialState: State = {
  fontSize: 16,
  value: '',
  error: '',
  logs: '',
  status: 'idle'
};

export const queryReducer = withState(initialState)
  .add(fsa.increaseFont, state => ({
    ...state,
    fontSize: changeFontSize(state.fontSize, 2)
  }))
  .add(fsa.decreaseFont, state => ({
    ...state,
    fontSize: changeFontSize(state.fontSize, -2)
  }))
  .add(fsa.setValue, (state, { payload }) => ({
    ...state,
    value: payload
  }))
  .add(fsa.setStatus, (state, { payload }) => ({
    ...state,
    status: payload
  }))
  .add(fsa.setQuery, (state, { payload: { value, error, logs, status } }) => ({
    ...state,
    value: error ? state.value : value,
    error,
    logs,
    status
  }))
  .add(fsa.clearQuery, state => ({
    ...state,
    value: '',
    error: '',
    logs: '',
    status: 'idle'
  }));

export const runQuery: ThunkAction = () => async (dispatch, getState) => {
  const { query }: RootState = getState();
  console.log({ query });

  const response = await requestRunCommand(query.value);
  const [answer, rawError, logs] = await parseResponse(response);
  const error = rawError.trim();

  const status = error ? 'error' : 'success';

  console.log({ answer, error, logs, status });

  dispatch(queryFsa.setQuery({ value: answer, error, logs, status }));
};
