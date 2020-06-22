import React, { FC } from 'react';
import BuildIcon from '../../icons/Build.svg';
import DictionaryIcon from '../../icons/Book.svg';
import SaveIcon from '../../icons/Save.svg';
import PublishIcon from '../../icons/Upload.svg';
import ZoomInIcon from '../../icons/ZoomIn.svg';
import ZoomOutIcon from '../../icons/ZoomOut.svg';
import Toolbar, { ToolbarProps } from '../Toolbar/Toolbar';
import Button from '../Button/Button';

interface Props extends Pick<ToolbarProps, 'status'> {
  isOntologyReadOnly: boolean;
  onDictionaryClick(): void;
  onSaveClick(): void;
  onPublishClick(): void;
  onZoomInClick(): void;
  onZoomOutClick(): void;
  onBuildClick(): void;
}

const OntologyToolbar: FC<Props> = ({
  status,
  isOntologyReadOnly,
  onDictionaryClick,
  onSaveClick,
  onPublishClick,
  onZoomInClick,
  onZoomOutClick,
  onBuildClick
}) => {
  const buttons = [
    <Button
      title="Увеличить шрифт в окне онтологии"
      onClick={onZoomInClick}
      key="zoom-in"
    >
      <ZoomInIcon width={24} />
    </Button>,
    <Button
      title="Уменьшить шрифт в окне онтологии"
      onClick={onZoomOutClick}
      key="zoom-out"
    >
      <ZoomOutIcon width={24} />
    </Button>,
    <Button
      title="Открыть словарь шаблонов"
      onClick={onDictionaryClick}
      key="dictionary"
    >
      <DictionaryIcon width={24} />
    </Button>,
    <Button
      title="Сохранить черновик"
      isDisabled={isOntologyReadOnly}
      onClick={onSaveClick}
      key="save"
    >
      <SaveIcon width={24} />
    </Button>,
    <Button
      title="Опубликовать онтологию"
      isDisabled={isOntologyReadOnly}
      onClick={onPublishClick}
      key="publish"
    >
      <PublishIcon width={26} />
    </Button>
  ];

  const mainButton = (
    <Button
      title="Построить онтологию"
      isDisabled={isOntologyReadOnly}
      onClick={onBuildClick}
    >
      <BuildIcon width={43} />
    </Button>
  );

  return <Toolbar status={status} buttons={buttons} mainButton={mainButton} />;
};

export default OntologyToolbar;
