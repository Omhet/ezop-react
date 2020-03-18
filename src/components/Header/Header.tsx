import React, { FC } from 'react';
import styles from './style.scss';
import Button from '../Button/Button';

interface Props {
  name: string;
  icon: React.ReactNode;
  onIconClick?(): void;
}

const Header: FC<Props> = ({ name, icon, onIconClick }) => {
  return (
    <div className={styles.header}>
      <span className={styles.name}>{name}</span>
      <Button className={styles.collapseIcon} onClick={onIconClick}>
        {icon}
      </Button>
    </div>
  );
};

export default Header;
