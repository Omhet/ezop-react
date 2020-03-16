import React from 'react';
import QueryBox from '../../containers/QueryBox';
import styles from './style.scss';
import PageHeader from '../../containers/PageHeader';
import OntologyBox from '../../containers/OntologyBox';

const App = () => {
  return (
    <div className={styles.main}>
      <PageHeader />
      <OntologyBox />
      <QueryBox />
    </div>
  );
};

export default App;
