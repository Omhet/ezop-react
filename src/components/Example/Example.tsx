import React, { FC } from 'react';
import styles from './style.scss';

interface Props {
  foo: string;
}

const Example: FC<Props> = ({ foo }) => {
  return <div>{foo}</div>;
};

export default Example;
