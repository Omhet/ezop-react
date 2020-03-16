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
      <OntologyBox />
      <OntologyLogs />
      <QueryBox />
      <QueryLogs />
    </div>
  );
};

export default App;
