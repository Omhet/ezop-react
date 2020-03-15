import React, { FC } from 'react';
import classnames from 'classnames';
import ExpandIcon from '../../icons/Expand.svg';

import styles from './style.scss';
import Editor from '../Editor/Editor';
import Button from '../Button/Button';
import { ExecutionStatus } from '../../types';

interface Props {
  name: string;
  status: ExecutionStatus;
  statusText?: string;
  onChange(value: string): void;
  onExpandClick?(): void;
}

const InputBox: FC<Props> = ({
  name,
  status,
  statusText,
  onChange,
  onExpandClick
}) => {
  return (
    <div className={styles.main}>
      <div className={classnames(styles.header, styles[status])}>
        <span className={styles.name}>{name}</span>
        <div className={styles.rightBlock}>
          {statusText !== undefined && <span>{statusText}</span>}
          <Button className={styles.expandIcon} onClick={onExpandClick}>
            <ExpandIcon width={18} />
          </Button>
        </div>
      </div>
      <Editor onChange={onChange} />
    </div>
  );
};

export default InputBox;
