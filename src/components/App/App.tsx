import React from 'react';
import QueryBox from '../../containers/QueryBox';
import styles from './style.scss';
import PageHeader from '../../containers/PageHeader';

const App = () => {
  return (
    <div className={styles.main}>
      <PageHeader />
      <QueryBox />
    </div>
  );
};

export default App;
