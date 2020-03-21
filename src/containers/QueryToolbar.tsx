import { connect } from 'react-redux';
import { RootState } from '../redux/types';
import QueryToolbar from '../components/QueryToolbar/QueryToolbar';
import { Dispatch } from 'redux';
import { ExecutionStatus } from '../types';
import { queryFsa } from '../redux/modules/query';

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
    dispatch(queryFsa.increaseFont());
  },
  onZoomOutClick: () => {
    dispatch(queryFsa.decreaseFont());
  }
});

export default connect(mapState, mapDispatch)(QueryToolbar);
