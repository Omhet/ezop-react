import { createAction } from 'typesafe-actions';
import { withState } from '../helpers/typesafe-reducer';
import { changeFontSize } from '../helpers/misc';
import { Query } from '../types';
import { requestBuildOntology } from '../helpers/request';

const fsa = {
  increaseFont: createAction('ONTOLOGY/INCREASE_FONT')<undefined>(),
  decreaseFont: createAction('ONTOLOGY/DECREASE_FONT')<undefined>(),
  setValue: createAction('ONTOLOGY/SET_VALUE')<string>(),
  setOntology: createAction('QUERY/SET_ONTOLOGY')<Omit<Query, 'value'>>()
};
export const ontologyFsa = fsa;

interface State extends Query {
  fontSize: number;
}

const initialState: State = {
  fontSize: 16,
  value: window.serverData.ontology.text,
  error: '',
  logs: '',
  status: 'idle'
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
  }))
  .add(fsa.setOntology, (state, { payload: { error, logs, status } }) => ({
    ...state,
    error,
    logs,
    status
  }));

export const buildOntology: ThunkAction = () => async (dispatch, getState) => {
  const { ontology }: RootState = getState();
  console.log({ ontology });

  const [rawError, logs] = (await requestBuildOntology(ontology.value)) ?? [];
  const error = rawError.trim();
  const status = error ? 'error' : 'success';
  console.log({ error, logs, status });

  dispatch(fsa.setOntology({ error, logs, status }));
};
