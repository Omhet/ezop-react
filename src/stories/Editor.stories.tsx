import React from 'react';
import Editor from '../components/Editor/Editor';

export default {
  title: 'Editor'
};

export const Basic = () => <Editor onChange={value => console.log(value)} />;
