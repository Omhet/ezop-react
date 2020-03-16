import React from 'react';
import QueryBox from '../../containers/QueryBox';
import styles from './style.scss';
import PageHeader from '../../containers/PageHeader';
import OntologyBox from '../../containers/OntologyBox';
import QueryLogs from '../../containers/QueryLogs';
import OntologyLogs from '../../containers/OntologyLogs';

const App = () => {
  return (
    <div className={styles.main}>
      <PageHeader />
      <div className={styles.layout}>
        <div className={styles.block}>
          <OntologyBox />
          <OntologyLogs />
        </div>
        <div className={styles.block}>
          <QueryBox />
          <QueryLogs />
        </div>
      </div>
    </div>
  );
};

export default App;
