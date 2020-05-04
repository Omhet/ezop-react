import React, { FC, ChangeEvent } from 'react';
import classnames from 'classnames';
import ExpandIcon from '../../icons/Expand.svg';
import EditIcon from '../../icons/Pencil.svg';

import styles from './style.scss';
import Editor, { EditorProps } from '../Editor/Editor';
import Button from '../Button/Button';
import { ExecutionStatus } from '../../types';

interface Props extends EditorProps {
  name: string;
  status: ExecutionStatus;
  canEditName: boolean;
  statusText?: string;
  onExpandClick?(): void;
  onNameEdit(name: string): void;
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
  canEditName,
  onExpandClick,
  onNameEdit
}) => {
  const handleNameEdit = (e: ChangeEvent<HTMLInputElement>) => {
    onNameEdit(e.target.value);
  };
  return (
    <div className={styles.main}>
      <div className={classnames(styles.header, styles[status])}>
        {canEditName ? (
          <>
            <EditIcon width={18} height={18} className={styles.editIcon} />
            <input
              onChange={handleNameEdit}
              type="text"
              value={name}
              className={styles.nameEdit}
            />
          </>
        ) : (
          <span className={styles.name}>{name}</span>
        )}
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
