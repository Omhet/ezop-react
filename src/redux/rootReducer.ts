import { combineReducers } from 'redux';
import { dictionaryReducer } from './modules/dictionary';
import { queryReducer } from './modules/query';
import { ontologyReducer } from './modules/ontology';

export const rootReducer = combineReducers({
  dictionary: dictionaryReducer,
  query: queryReducer,
  ontology: ontologyReducer
});
