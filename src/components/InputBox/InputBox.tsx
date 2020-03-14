import React, { FC } from 'react';
import ExpandIcon from '../../icons/Expand.svg';

import styles from './style.scss';
import Editor from '../Editor/Editor';

interface Props {
  name: string;
  onChange(value: string): void;
  status?: string;
}

const InputBox: FC<Props> = ({ name, status, onChange }) => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <span className={styles.name}>{name}</span>
        <div className={styles.status}>
          {status !== undefined && <span>{status}</span>}
          <ExpandIcon className={styles.expandIcon} />
        </div>
      </div>
      <Editor onChange={onChange} />
    </div>
  );
};

export default InputBox;
