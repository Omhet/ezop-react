import React, { FC } from 'react';
import RunIcon from '../../icons/Run.svg';
import DeleteIcon from '../../icons/Delete.svg';
import DownloadIcon from '../../icons/Download.svg';
import ZoomInIcon from '../../icons/ZoomIn.svg';
import ZoomOutIcon from '../../icons/ZoomOut.svg';
import Toolbar, { ToolbarProps } from '../Toolbar/Toolbar';
import Button from '../Button/Button';

interface Props extends Pick<ToolbarProps, 'status'> {
  onDeleteClick(): void;
  onDownloadClick(): void;
  onZoomInClick(): void;
  onZoomOutClick(): void;
  onRunClick(): void;
}

const QueryToolbar: FC<Props> = ({
  status,
  onDeleteClick,
  onDownloadClick,
  onZoomInClick,
  onZoomOutClick,
  onRunClick
}) => {
  const buttons = [
    <Button onClick={onDeleteClick} key="delete">
      <DeleteIcon width={28} />
    </Button>,
    <Button onClick={onDownloadClick} key="download">
      <DownloadIcon width={24} />
    </Button>,
    <Button onClick={onZoomInClick} key="zoom-in">
      <ZoomInIcon width={24} />
    </Button>,
    <Button onClick={onZoomOutClick} key="zoom-out">
      <ZoomOutIcon width={24} />
    </Button>
  ];

  const mainButton = (
    <Button onClick={onRunClick}>
      <RunIcon width={43} />
    </Button>
  );

  return <Toolbar status={status} buttons={buttons} mainButton={mainButton} />;
};

export default QueryToolbar;
