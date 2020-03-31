import React, { FC } from 'react';
import classnames from 'classnames';
import styles from './style.scss';
import CollapseIcon from '../../icons/LeftArrowCircle.svg';
import Header from '../Header/Header';

interface Props {
  items: string[];
  isOpen: boolean;
  className?: string;
  onCollapseClick?(): void;
}

const Dictionary: FC<Props> = ({
  items,
  isOpen,
  className,
  onCollapseClick
}) => {
  return isOpen ? (
    <div className={classnames(styles.main, className)}>
      <Header
        name="Словарь"
        icon={<CollapseIcon width={20} />}
        onIconClick={onCollapseClick}
      />
      <div className={styles.items}>
        {items.map(item => (
          <div title={item} key={item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default Dictionary;
