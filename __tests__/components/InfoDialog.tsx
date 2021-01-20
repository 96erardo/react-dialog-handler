import React, { useEffect, useState } from 'react';
import { useDialogParams, useDialogCloser } from '../../src/hooks';

export const dialogId = 'info-form-dialog';

export const InfoDialog: React.FC = () => {
  const { open, params } = useDialogParams<Params>(dialogId);
  const [form, setForm] = useState({ name: '', lastname: '' });
  const closeDialog = useDialogCloser();

  const onClose = () => closeDialog(dialogId);

  useEffect(() => {
    if (open) {      
      setForm({
        name: params ? params.name : '',
        lastname: params ? params.lastname : '',
      })
    }
  }, [open, params]);

  return (
    <div id="dialog" className={open ? "open": "closed"}>
      <input 
        type="text"
        name="name"
        value={form.name}
        onChange={() => {}}
      />
      <input
        type="text"
        name="lastname"
        value={form.lastname}
        onChange={() => {}}
      />
      <button onClick={onClose}>
        Close Dialog
      </button>
    </div>
  );
}

export type Params = {
  name: string,
  lastname: string,
}