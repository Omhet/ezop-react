import React, { FC } from 'react';
import ExpandIcon from '../../icons/Expand.svg';

import styles from './style.scss';

interface Props {
  name: string;
  status?: string;
}

const InputBox: FC<Props> = ({ name, status }) => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <span className={styles.name}>{name}</span>
        <div className={styles.status}>
          {status !== undefined && <span>{status}</span>}
          <ExpandIcon className={styles.expandIcon} />
        </div>
      </div>
    </div>
  );
};

export default InputBox;
