import React, { FC } from 'react';
import classnames from 'classnames';

import styles from './style.scss';
import Header from '../Header/Header';

interface Props {
  name: string;
  value?: string;
  className?: string;
  onCollapseClick?(): void;
}

const SideBox: FC<Props> = ({ name, value, className, onCollapseClick }) => {
  return (
    <div className={classnames(styles.main, className)}>
      <Header name={name} onIconClick={onCollapseClick} />
      <div className={styles.value}>{value}</div>
    </div>
  );
};

export default SideBox;
