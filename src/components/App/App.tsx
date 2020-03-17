import React from 'react';
import QueryBox from '../../containers/QueryBox';
import styles from './style.scss';
import PageHeader from '../../containers/PageHeader';
import OntologyBox from '../../containers/OntologyBox';
import QueryLogs from '../../containers/QueryLogs';
import OntologyLogs from '../../containers/OntologyLogs';
import QueryToolbar from '../../containers/QueryToolbar';
import OntologyToolbar from '../../containers/OntologyToolbar';

const App = () => {
  return (
    <div className={styles.main}>
      <PageHeader />
      <div className={styles.layout}>
        <div className={styles.block}>
          <div>
            <OntologyToolbar />
            <OntologyBox />
          </div>
          <OntologyLogs />
        </div>
        <div className={styles.block}>
          <div>
            <QueryToolbar />
            <QueryBox />
          </div>
          <QueryLogs />
        </div>
      </div>
    </div>
  );
};

export default App;
