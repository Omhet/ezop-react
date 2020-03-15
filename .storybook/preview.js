import React from 'react';
import { addDecorator } from '@storybook/react';
import '../src/style/index.scss';

const storyStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 911,
  backgroundColor: '#E5E5E5'
};

addDecorator(storyFn => <div style={storyStyle}>{storyFn()}</div>);
