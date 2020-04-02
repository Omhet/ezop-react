import React, { FC, ChangeEvent } from 'react';
import classnames from 'classnames';
import styles from './style.scss';
import CollapseIcon from '../../icons/LeftArrowCircle.svg';
import Header from '../Header/Header';

interface Props {
  items: string[];
  isOpen: boolean;
  className?: string;
  description: string;
  onCollapseClick?(): void;
  onItemClick(name: string): void;
}

const Dictionary: FC<Props> = ({
  items,
  isOpen,
  description,
  className,
  onItemClick,
  onCollapseClick
}) => {
  const handleValueChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onItemClick(event.target.value);
  };

  return isOpen ? (
    <div className={classnames(styles.main, className)}>
      <Header
        name="Словарь"
        icon={<CollapseIcon width={20} />}
        onIconClick={onCollapseClick}
      />
      <select
        size={items.length}
        className={styles.items}
        onChange={handleValueChange}
      >
        {items.map(item => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <div>
        <Header name="Описание шаблона" />
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  ) : null;
};

export default Dictionary;
