import { createAction } from 'typesafe-actions';
import { withState } from '../helpers/typesafe-reducer';
import { ThunkAction } from 'redux-thunk';
import { requestDictionaryItemDescription } from '../helpers/request';

export const fsa = {
  openDictionary: createAction('DICTIONARY/OPEN')<undefined>(),
  closeDictionary: createAction('DICTIONARY/CLOSE')<undefined>(),
  setDescription: createAction('DICTIONARY/SET_DESCRIPTION')<string>()
};
export const dictionaryFsa = fsa;

interface State {
  isOpen: boolean;
  description: string;
}

const initialState: State = {
  isOpen: false,
  description: 'Выберите шаблон из словаря выше, чтобы узнать для чего он'
};

export const dictionaryReducer = withState(initialState)
  .add(fsa.openDictionary, state => ({
    ...state,
    isOpen: true
  }))
  .add(fsa.closeDictionary, state => ({
    ...state,
    isOpen: false
  }))
  .add(fsa.setDescription, (state, { payload }) => ({
    ...state,
    description: payload
  }));

export const setItemDescription: ThunkAction = (
  itemName: string
) => async dispatch => {
  const description = (await requestDictionaryItemDescription(itemName)) ?? '';
  dispatch(fsa.setDescription(description));
};
