import { connect } from 'react-redux';
import { RootState } from '../redux/types';
import OntologyToolbar from '../components/OntologyToolbar/OntologyToolbar';
import { Dispatch } from 'redux';
import { dictionaryFsa } from '../redux/modules/dictionary';
import { ontologyFsa, buildOntology } from '../redux/modules/ontology';

const mapState = (state: RootState) => {
  return {
    status: state.ontology.status
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
    console.log('Save');
  },
  onUploadClick: () => {
    console.log('Upload');
  },
  onZoomInClick: () => {
    dispatch(ontologyFsa.increaseFont());
  },
  onZoomOutClick: () => {
    dispatch(ontologyFsa.decreaseFont());
  }
});

export default connect(mapState, mapDispatch)(OntologyToolbar);
