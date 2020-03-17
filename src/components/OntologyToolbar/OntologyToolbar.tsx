import React, { FC } from 'react';
import BuildIcon from '../../icons/Build.svg';
import DictionaryIcon from '../../icons/Book.svg';
import SaveIcon from '../../icons/Save.svg';
import UploadIcon from '../../icons/Upload.svg';
import ZoomInIcon from '../../icons/ZoomIn.svg';
import ZoomOutIcon from '../../icons/ZoomOut.svg';
import Toolbar, { ToolbarProps } from '../Toolbar/Toolbar';
import Button from '../Button/Button';

interface Props extends Pick<ToolbarProps, 'status'> {
  onDictionaryClick(): void;
  onSaveClick(): void;
  onUploadClick(): void;
  onZoomInClick(): void;
  onZoomOutClick(): void;
  onBuildClick(): void;
}

const OntologyToolbar: FC<Props> = ({
  status,
  onDictionaryClick,
  onSaveClick,
  onUploadClick,
  onZoomInClick,
  onZoomOutClick,
  onBuildClick
}) => {
  const buttons = [
    <Button onClick={onZoomInClick} key="zoom-in">
      <ZoomInIcon width={24} />
    </Button>,
    <Button onClick={onZoomOutClick} key="zoom-out">
      <ZoomOutIcon width={24} />
    </Button>,
    <Button onClick={onDictionaryClick} key="dictionary">
      <DictionaryIcon width={24} />
    </Button>,
    <Button onClick={onSaveClick} key="save">
      <SaveIcon width={24} />
    </Button>,
    <Button onClick={onUploadClick} key="upload">
      <UploadIcon width={26} />
    </Button>
  ];

  const mainButton = (
    <Button onClick={onBuildClick}>
      <BuildIcon width={43} />
    </Button>
  );

  return <Toolbar status={status} buttons={buttons} mainButton={mainButton} />;
};

export default OntologyToolbar;
