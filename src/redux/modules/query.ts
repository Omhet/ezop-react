import { createAction } from 'typesafe-actions';
import { withState } from '../helpers/typesafe-reducer';
import { changeFontSize } from '../helpers/misc';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../types';
import { requestRunCommand, parseResponse } from '../helpers/request';

const fsa = {
  increaseFont: createAction('QUERY/INCREASE_FONT')<undefined>(),
  decreaseFont: createAction('QUERY/DECREASE_FONT')<undefined>(),
  setValue: createAction('QUERY/SET_VALUE')<string>(),
  clearValue: createAction('QUERY/CLEAR_VALUE')<undefined>()
};
export const queryFsa = fsa;

interface State {
  fontSize: number;
  value: string;
}

const initialState: State = {
  fontSize: 16,
  value: ''
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
  .add(fsa.clearValue, state => ({
    ...state,
    value: ''
  }));

export const runQuery: ThunkAction = () => async (dispatch, getState) => {
  const { query }: RootState = getState();
  console.log({ query });

  const response = await requestRunCommand(query.value);
  const [answer, rest, mes] = await parseResponse(response);
  console.log({ answer, rest, mes });

  dispatch(queryFsa.setValue(answer));
};
