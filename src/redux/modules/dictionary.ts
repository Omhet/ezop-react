import { createAction } from 'typesafe-actions';
import { withState } from '../helpers/typesafe-reducer';

export const dictionaryFsa = {
  openDictionary: createAction('DICTIONARY/OPEN')<undefined>(),
  closeDictionary: createAction('DICTIONARY/CLOSE')<undefined>()
};

interface State {
  isOpen: boolean;
}

const initialState: State = {
  isOpen: false
};

export const dictionaryReducer = withState(initialState)
  .add(dictionaryFsa.openDictionary, state => ({
    ...state,
    isOpen: true
  }))
  .add(dictionaryFsa.closeDictionary, state => ({
    ...state,
    isOpen: false
  }));
