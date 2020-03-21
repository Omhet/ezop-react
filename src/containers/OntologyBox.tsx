import { connect } from 'react-redux';
import { RootState } from '../redux/types';
import InputBox from '../components/InputBox/InputBox';
import { Dispatch } from 'redux';
import { ExecutionStatus } from '../types';

const mapState = (state: RootState) => {
  const { ontology } = state;

  return {
    name: 'Грамматика булевых выражений',
    status: 'idle' as ExecutionStatus,
    fontSize: ontology.fontSize
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  onChange: (value: string) => {
    console.log(value);
  }
});

export default connect(mapState, mapDispatch)(InputBox);
