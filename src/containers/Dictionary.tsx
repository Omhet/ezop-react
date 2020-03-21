import { connect } from 'react-redux';
import { RootState } from '../redux/types';
import Dictionary from '../components/Dictionary/Dictionary';
import { Dispatch } from 'redux';
import { DictionaryItem } from '../types';
import { dictionaryFsa } from '../redux/modules/dictionary';

const items: DictionaryItem[] = [
  {
    value: '"@Term"',
    description: 'Term'
  },
  {
    value: '[@комментарий]',
    description: 'Comment'
  },
  {
    value: '@A - подобласть @B',
    description: 'Subarea'
  }
];

const mapState = (state: RootState) => {
  return {
    items,
    isOpen: state.dictionary.isOpen
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  onCollapseClick: () => {
    dispatch(dictionaryFsa.closeDictionary());
  }
});

export default connect(mapState, mapDispatch)(Dictionary);
