import React, { FC } from 'react';
import AceEditor from 'react-ace';
import styles from './style.scss';

import 'ace-builds/src-noconflict/mode-text';
import 'ace-builds/src-noconflict/theme-github';

export interface EditorProps {
  fontSize?: number;
  onChange(value: string): void;
}

const Editor: FC<EditorProps> = ({ onChange, fontSize = 16 }) => {
  return (
    <AceEditor
      mode="text"
      theme="github"
      onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      fontSize={fontSize}
      editorProps={{ $blockScrolling: true }}
      highlightActiveLine={false}
      showPrintMargin={false}
      width="auto"
      height="auto"
      className={styles.editor}
    />
  );
};

export default Editor;
