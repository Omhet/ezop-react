import React, { FC } from 'react';
import AceEditor from 'react-ace';
import styles from './style.scss';

import 'ace-builds/src-noconflict/mode-text';
import 'ace-builds/src-noconflict/theme-github';

interface Props {
  onChange(value: string): void;
}

const Editor: FC<Props> = ({ onChange }) => {
  return (
    <AceEditor
      mode="text"
      theme="github"
      onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
      width="100%"
      height="100%"
      highlightActiveLine={false}
      showPrintMargin={false}
    />
  );
};

export default Editor;
