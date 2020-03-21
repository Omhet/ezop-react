import { combineReducers } from 'redux';
import { dictionaryReducer } from './modules/dictionary';
import { queryReducer } from './modules/query';

export const rootReducer = combineReducers({
  dictionary: dictionaryReducer,
  query: queryReducer
});
