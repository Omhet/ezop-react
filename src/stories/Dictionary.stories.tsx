import React from 'react';
import Dictionary from '../components/Dictionary/Dictionary';
import { DictionaryItem } from '../types';

export default {
  title: 'Dictionary'
};

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

export const Basic = () => <Dictionary isOpen items={items} />;
