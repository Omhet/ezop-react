import React, { FC } from 'react';
import CollapseIcon from '../../icons/RightArrowCircle.svg';

import styles from './style.scss';
import Button from '../Button/Button';

interface Props {
  name: string;
  value?: string;
  onCollapseClick?(): void;
}

const SideBox: FC<Props> = ({ name, value, onCollapseClick }) => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <span className={styles.name}>{name}</span>
        <Button className={styles.collapseIcon} onClick={onCollapseClick}>
          <CollapseIcon width={18} />
        </Button>
      </div>
      <div className={styles.value}>{value}</div>
    </div>
  );
};

export default SideBox;
