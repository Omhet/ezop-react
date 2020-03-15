import React, { FC, ReactNodeArray, ReactNode } from 'react';
import classnames from 'classnames';

import styles from './style.scss';
import { ExecutionStatus } from '../../types';

interface Props {
  status: ExecutionStatus;
  buttons: ReactNodeArray;
  mainButton?: ReactNode;
}

const Toolbar: FC<Props> = ({ status, buttons, mainButton }) => {
  return (
    <div className={styles.main}>
      <div className={classnames(styles.header, styles[status])}></div>
      <div className={styles.buttons}>{buttons}</div>
      <div className={styles.mainButton}>{mainButton}</div>
    </div>
  );
};

export default Toolbar;
