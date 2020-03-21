import { connect } from 'react-redux';
import { RootState } from '../redux/types';
import OntologyToolbar from '../components/OntologyToolbar/OntologyToolbar';
import { Dispatch } from 'redux';
import { ExecutionStatus } from '../types';

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
    console.log('Dictionary');
  },
  onSaveClick: () => {
    console.log('Save');
  },
  onUploadClick: () => {
    console.log('Upload');
  },
  onZoomInClick: () => {
    console.log('Zoom In');
  },
  onZoomOutClick: () => {
    console.log('Zoom Out');
  }
});

export default connect(mapState, mapDispatch)(OntologyToolbar);
