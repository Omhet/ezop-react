import { createAction } from 'typesafe-actions';
import { withState } from '../helpers/typesafe-reducer';
import { changeFontSize } from '../helpers/misc';
import { Query } from '../types';

const fsa = {
  increaseFont: createAction('ONTOLOGY/INCREASE_FONT')<undefined>(),
  decreaseFont: createAction('ONTOLOGY/DECREASE_FONT')<undefined>(),
  setValue: createAction('ONTOLOGY/SET_VALUE')<string>()
};
export const ontologyFsa = fsa;

interface State extends Query {
  fontSize: number;
}

const initialState: State = {
  fontSize: 16,
  value: '',
  error: '',
  logs: ''
};

export const ontologyReducer = withState(initialState)
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
  }));
