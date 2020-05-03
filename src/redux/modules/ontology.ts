import { createAction } from 'typesafe-actions';
import { withState } from '../helpers/typesafe-reducer';
import { changeFontSize } from '../helpers/misc';
import { Query, RootState } from '../types';
import {
  requestBuildOntology,
  requestSaveOntology,
  requestGetNewVersion
} from '../helpers/request';
import { ExecutionStatus } from '../../types';

const fsa = {
  increaseFont: createAction('ONTOLOGY/INCREASE_FONT')<undefined>(),
  decreaseFont: createAction('ONTOLOGY/DECREASE_FONT')<undefined>(),
  setValue: createAction('ONTOLOGY/SET_VALUE')<string>(),
  setStatus: createAction('ONTOLOGY/SET_STATUS')<ExecutionStatus>(),
  setStatusText: createAction('ONTOLOGY/SET_STATUS_TEXT')<string>(),
  setOntology: createAction('ONTOLOGY/SET_ONTOLOGY')<Omit<Query, 'value'>>()
};
export const ontologyFsa = fsa;

interface State extends Query {
  fontSize: number;
  statusText: string;
}

const initialState: State = {
  fontSize: 16,
  value: window.serverData.ontology.text,
  error: '',
  logs: '',
  status: 'idle',
  statusText: window.serverData.ontology.isDraft ? 'Черновик' : ''
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
  .add(fsa.setStatus, (state, { payload }) => ({
    ...state,
    status: payload
  }))
  .add(fsa.setStatusText, (state, { payload }) => ({
    ...state,
    statusText: payload
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
  const error = rawError
    .trim()
    .replace(/\[\d+\]/g, '')
    .trim();
  const status = error ? 'error' : 'success';
  console.log({ error, logs, status });

  let statusText;
  if (status === 'error') {
    statusText = 'Ошибка построения';
  } else if (status === 'success') {
    statusText = 'Онтология построена';
  }

  dispatch(fsa.setOntology({ error, logs, status }));
  dispatch(fsa.setStatusText(statusText));
};

export const saveOntology: ThunkAction = () => async (dispatch, getState) => {
  const {
    ontology: { value }
  }: RootState = getState();
  const { title } = window.serverData.ontology;

  const res = await requestGetNewVersion(title);
  if (res !== undefined && res.includes('Измените имя')) {
    const logs = `Онтология с именем ${title} уже существует. Пожалуйста, измените имя.`;
    dispatch(fsa.setOntology({ error: '', logs, status: 'error' }));
    dispatch(fsa.setStatusText('Ошибка сохранения'));
    return;
  }
  dispatch(ontologyFsa.setStatus('idle'));
  dispatch(ontologyFsa.setStatusText('Черновик'));
  try {
    await requestSaveOntology(value, title);
    dispatch(ontologyFsa.setStatus('success'));
    dispatch(ontologyFsa.setStatusText('Черновик успешно сохранен'));
  } catch {
    dispatch(ontologyFsa.setStatus('error'));
    dispatch(fsa.setStatusText('Ошибка сохранения'));
  }
};
