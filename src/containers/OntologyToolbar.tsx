import { connect } from 'react-redux';
import { RootState } from '../redux/types';
import OntologyToolbar from '../components/OntologyToolbar/OntologyToolbar';
import { Dispatch } from 'redux';
import { dictionaryFsa } from '../redux/modules/dictionary';
import {
  ontologyFsa,
  buildOntology,
  saveOntology
} from '../redux/modules/ontology';

const mapState = (state: RootState) => {
  const {
    ontology: { status }
  } = state;
  const { isDraft } = window.serverData.ontology;

  return {
    status,
    isOntologyReadOnly: !isDraft
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  onBuildClick: () => {
    dispatch(buildOntology());
  },
  onDictionaryClick: () => {
    dispatch(dictionaryFsa.openDictionary());
  },
  onSaveClick: () => {
    dispatch(saveOntology());
  },
  onPublishClick: () => {
    console.log('Publish');
  },
  onZoomInClick: () => {
    dispatch(ontologyFsa.increaseFont());
  },
  onZoomOutClick: () => {
    dispatch(ontologyFsa.decreaseFont());
  }
});

export default connect(mapState, mapDispatch)(OntologyToolbar);
