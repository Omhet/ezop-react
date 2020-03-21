import { combineReducers } from 'redux';
import { dictionaryReducer } from './modules/dictionary';

export const rootReducer = combineReducers({
  dictionary: dictionaryReducer
});
