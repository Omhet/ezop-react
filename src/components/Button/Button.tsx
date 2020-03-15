import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import styles from './style.scss';

interface Props {
  onClick?(e: React.MouseEvent): void;
  className?: string;
}

const Button: FunctionComponent<Props> = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={classnames(styles.main, className)}>
      {children}
    </button>
  );
};

export default Button;
