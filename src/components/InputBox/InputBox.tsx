import React, { FC } from 'react';
import classnames from 'classnames';
import ExpandIcon from '../../icons/Expand.svg';

import styles from './style.scss';
import Editor, { EditorProps } from '../Editor/Editor';
import Button from '../Button/Button';
import { ExecutionStatus } from '../../types';

interface Props extends EditorProps {
  name: string;
  status: ExecutionStatus;
  statusText?: string;
  onExpandClick?(): void;
}

const InputBox: FC<Props> = ({
  name,
  status,
  statusText,
  onChange,
  fontSize,
  value,
  error,
  isReadOnly,
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
      <Editor
        onChange={onChange}
        fontSize={fontSize}
        value={value}
        error={error}
        isReadOnly={isReadOnly}
      />
    </div>
  );
};

export default InputBox;
