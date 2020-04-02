import { connect } from 'react-redux';
import { RootState } from '../redux/types';
import Dictionary from '../components/Dictionary/Dictionary';
import { Dispatch } from 'redux';
import { dictionaryFsa, setItemDescription } from '../redux/modules/dictionary';

const mapState = (state: RootState) => {
  return {
    items: window.serverData.templates,
    isOpen: state.dictionary.isOpen
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  onCollapseClick: () => {
    dispatch(dictionaryFsa.closeDictionary());
  },
  onItemClick: (name: string) => {
    dispatch(setItemDescription(name));
  }
});

export default connect(mapState, mapDispatch)(Dictionary);
