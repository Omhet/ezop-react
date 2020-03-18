import React from 'react';
import CollapseIcon from '../icons/RightArrowCircle.svg';
import Header from '../components/Header/Header';

export default {
  title: 'Header'
};

export const Basic = () => (
  <Header
    name="Заголовок"
    icon={<CollapseIcon width={22} />}
    onIconClick={() => console.log('Icon click')}
  />
);
