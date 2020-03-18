import React, { FC } from 'react';
import styles from './style.scss';
import CollapseIcon from '../../icons/RightArrowCircle.svg';
import { DictionaryItem } from '../../types';
import Header from '../Header/Header';

interface Props {
  items: DictionaryItem[];
  onCollapseClick?(): void;
}

const Dictionary: FC<Props> = ({ items, onCollapseClick }) => {
  return (
    <div className={styles.main}>
      <Header
        name="Словарь"
        icon={<CollapseIcon width={20} />}
        onIconClick={onCollapseClick}
      />
      <div className={styles.items}>
        {items.map(({ value, description }) => (
          <div title={description} key={value}>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dictionary;
