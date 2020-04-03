import { connect } from 'react-redux';
import { RootState } from '../redux/types';
import InputBox from '../components/InputBox/InputBox';
import { Dispatch } from 'redux';
import { ontologyFsa } from '../redux/modules/ontology';

const mapState = (state: RootState) => {
  const {
    ontology: { status, value, fontSize, error }
  } = state;

  const { isDraft } = window.serverData.ontology;

  let statusText;
  if (status === 'error') {
    statusText = 'Ошибка построения';
  } else if (status === 'success') {
    statusText = 'Онтология построена';
  } else if (status === 'idle' && isDraft) {
    statusText = 'Черновик';
  }

  return {
    name: window.serverData.ontology.title,
    status,
    statusText,
    fontSize,
    value,
    error,
    isReadOnly: !isDraft
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  onChange: (value: string) => {
    if (!window.serverData.ontology.isDraft) {
      return;
    }

    dispatch(ontologyFsa.setValue(value));
    dispatch(ontologyFsa.setStatus('idle'));
  }
});

export default connect(mapState, mapDispatch)(InputBox);
