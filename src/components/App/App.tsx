import React, { FC } from 'react';
import QueryBox from '../../containers/QueryBox';
import styles from './style.scss';
import PageHeader from '../../containers/PageHeader';
import OntologyBox from '../../containers/OntologyBox';
import QueryLogs from '../../containers/QueryLogs';
import OntologyLogs from '../../containers/OntologyLogs';
import QueryToolbar from '../../containers/QueryToolbar';
import OntologyToolbar from '../../containers/OntologyToolbar';
import Dictionary from '../../containers/Dictionary';

interface Props {
  showOntologyLogs: boolean;
}

const App: FC<Props> = ({ showOntologyLogs }) => {
  return (
    <div className={styles.main}>
      <PageHeader />
      <div className={styles.layout}>
        <Dictionary className={styles.dictionary} />
        <div className={styles.blockLayout}>
          <div className={styles.block}>
            <div>
              <OntologyToolbar />
              <OntologyBox />
            </div>
            {showOntologyLogs && <OntologyLogs className={styles.logs} />}
          </div>
          <div className={styles.block}>
            <div>
              <QueryToolbar />
              <QueryBox />
            </div>
            <QueryLogs className={styles.logs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
