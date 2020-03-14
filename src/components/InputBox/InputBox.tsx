import React, { FC } from 'react';
import classnames from 'classnames';
import ExpandIcon from '../../icons/Expand.svg';

import styles from './style.scss';
import Editor from '../Editor/Editor';

type ExecutionStatus = 'success' | 'error' | 'idle';

interface Props {
  name: string;
  status: ExecutionStatus;
  statusText?: string;
  onChange(value: string): void;
}

const InputBox: FC<Props> = ({ name, status, statusText, onChange }) => {
  return (
    <div className={styles.main}>
      <div className={classnames(styles.header, styles[status])}>
        <span className={styles.name}>{name}</span>
        <div className={styles.rightBlock}>
          {statusText !== undefined && <span>{statusText}</span>}
          <ExpandIcon className={styles.expandIcon} />
        </div>
      </div>
      <Editor onChange={onChange} />
    </div>
  );
};

export default InputBox;
