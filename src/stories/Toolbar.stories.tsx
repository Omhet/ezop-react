import React from 'react';
import Toolbar from '../components/Toolbar/Toolbar';
import ZoomInIcon from '../icons/ZoomIn.svg';
import ZoomOutIcon from '../icons/ZoomOut.svg';
import BuildIcon from '../icons/Build.svg';
import Button from '../components/Button/Button';

export default {
  title: 'Toolbar'
};

const buttons = [
  <Button onClick={() => console.log('Zoom In')} key="zoom-in">
    <ZoomInIcon width={24} />
  </Button>,
  <Button onClick={() => console.log('Zoom Out')} key="zoom-out">
    <ZoomOutIcon width={24} />
  </Button>
];

const mainButton = (
  <Button onClick={() => console.log('Build')}>
    <BuildIcon width={43} />
  </Button>
);

export const Basic = () => (
  <Toolbar status="idle" buttons={buttons} mainButton={mainButton} />
);

export const Success = () => (
  <Toolbar status="success" buttons={buttons} mainButton={mainButton} />
);

export const Error = () => (
  <Toolbar status="error" buttons={buttons} mainButton={mainButton} />
);
