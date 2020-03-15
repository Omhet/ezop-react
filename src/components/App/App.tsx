import React from 'react';
import QueryBox from '../../containers/QueryBox';
import styles from './style.scss';

const App = () => {
  return (
    <div className={styles.main}>
      <QueryBox />
    </div>
  );
};

export default App;
