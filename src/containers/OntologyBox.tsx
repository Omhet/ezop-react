import { connect } from 'react-redux';
import { RootState } from '../redux/types';
import InputBox from '../components/InputBox/InputBox';
import { Dispatch } from 'redux';
import { ExecutionStatus } from '../types';
import { ontologyFsa } from '../redux/modules/ontology';

const mapState = (state: RootState) => {
  const { ontology } = state;

  return {
    name: window.serverData.ontology.title,
    status: 'idle' as ExecutionStatus,
    fontSize: ontology.fontSize,
    value: ontology.value,
    isReadOnly: !window.serverData.ontology.isDraft
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  onChange: (value: string) => {
    if (!window.serverData.ontology.isDraft) {
      return;
    }

    dispatch(ontologyFsa.setValue(value));
  }
});

export default connect(mapState, mapDispatch)(InputBox);
