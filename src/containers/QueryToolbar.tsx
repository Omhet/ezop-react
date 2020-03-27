import { connect } from 'react-redux';
import { RootState } from '../redux/types';
import QueryToolbar from '../components/QueryToolbar/QueryToolbar';
import { Dispatch } from 'redux';
import { queryFsa, runQuery } from '../redux/modules/query';

const mapState = (state: RootState) => {
  return {
    status: state.query.status
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  onRunClick: () => {
    dispatch(runQuery());
  },
  onDeleteClick: () => {
    dispatch(queryFsa.clearQuery());
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
