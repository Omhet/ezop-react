import { connect } from 'react-redux';
import { RootState } from '../redux/types';
import OntologyToolbar from '../components/OntologyToolbar/OntologyToolbar';
import { Dispatch } from 'redux';
import { ExecutionStatus } from '../types';
import { dictionaryFsa } from '../redux/modules/dictionary';
import { ontologyFsa } from '../redux/modules/ontology';

const mapState = (state: RootState) => {
  return {
    status: 'idle' as ExecutionStatus
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  onBuildClick: () => {
    console.log('Build');
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
