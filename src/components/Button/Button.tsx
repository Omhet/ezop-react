import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import styles from './style.scss';

interface Props {
  onClick?(e: React.MouseEvent): void;
  isDisabled?: boolean;
  className?: string;
}

const Button: FunctionComponent<Props> = ({
  children,
  isDisabled,
  className,
  onClick
}) => {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={classnames(styles.main, className)}
    >
      {children}
    </button>
  );
};

export default Button;
