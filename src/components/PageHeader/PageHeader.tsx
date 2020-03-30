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
        <div>
          среда:
          <div title={env} className={styles.accent}>
            {env}
          </div>
        </div>
        <div>
          автор:
          <div title={author} className={styles.accent}>
            {author}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
