import { useContext } from 'react';
import { OpenerContext, CloserContext, ParamsContext } from './DialogHandler';

/**
 * Use the dialog opener function
 * 
 * @returns The opener function
 */
export function useDialogOpener () {
  const openDialog = useContext(OpenerContext);

  return openDialog
}

/**
 * Use the dialog closer function
 * 
 * @returns The closer function
 */
export function useDialogCloser () {
  const closeDialog = useContext(CloserContext);

  return closeDialog;
}

/**
 * Use the specified dialog params
 * 
 * @param id - The dialog id
 * 
 * @returns The specified dialog's params
 */
export function useDialogParams(id) {
  const state = useContext(ParamsContext);

  if (!state[id]) {
    return { open: false };
  }

  return state[id];
}