import { connect } from 'react-redux';
import { RootState } from '../redux/types';
import QueryToolbar from '../components/QueryToolbar/QueryToolbar';
import { Dispatch } from 'redux';
import { ExecutionStatus } from '../types';

const mapState = (state: RootState) => {
  return {
    status: 'idle' as ExecutionStatus
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  onRunClick: () => {
    console.log('Run');
  },
  onDeleteClick: () => {
    console.log('Delete');
  },
  onDownloadClick: () => {
    console.log('Download');
  },
  onZoomInClick: () => {
    console.log('Zoom In');
  },
  onZoomOutClick: () => {
    console.log('Zoom Out');
  }
});

export default connect(mapState, mapDispatch)(QueryToolbar);
