import React from 'react';
import { dialogId, Params } from './InfoDialog';
import { useDialogOpener } from '../../src/hooks';

export const OpenDialogButton: React.FC = () => {
  const openDialog = useDialogOpener();

  const open = () => openDialog<Params>(dialogId, { name: 'John', lastname: 'Doe' });

  const openEmpty = () => openDialog<Params>(dialogId, { name: '', lastname: '' });

  return (
    <div>
      <button id="clean-opener" onClick={openEmpty}>
        Open dialog
      </button>
      <button id="opener" onClick={open}>
        Open dialog filled
      </button>
    </div>
  )
}