import React, { FC } from 'react';
import LogoIcon from '../../icons/Logo.svg';
import styles from './style.scss';

interface Props {
  env: string;
  author: string;
}

const PageHeader: FC<Props> = ({ env, author }) => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <LogoIcon width={30} />
        <span className={styles.logoText}>ЭЗОП</span>
      </div>
      <div className={styles.rightBlock}>
        <span>
          среда:<span className={styles.accent}>{env}</span>
        </span>
        <span>
          автор:<span className={styles.accent}>{author}</span>
        </span>
      </div>
    </div>
  );
};

export default PageHeader;
