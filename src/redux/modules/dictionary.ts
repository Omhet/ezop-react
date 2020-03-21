import { createAction } from 'typesafe-actions';
import { withState } from '../helpers/typesafe-reducer';

export const fsa = {
  openDictionary: createAction('DICTIONARY/OPEN')<undefined>(),
  closeDictionary: createAction('DICTIONARY/CLOSE')<undefined>()
};
export const dictionaryFsa = fsa;

interface State {
  isOpen: boolean;
}

const initialState: State = {
  isOpen: false
};

export const dictionaryReducer = withState(initialState)
  .add(fsa.openDictionary, state => ({
    ...state,
    isOpen: true
  }))
  .add(fsa.closeDictionary, state => ({
    ...state,
    isOpen: false
  }));
