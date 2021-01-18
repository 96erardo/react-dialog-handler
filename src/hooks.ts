import { useContext } from 'react';
import { OpenerContext, CloserContext, ParamsContext, Opener, State } from './DialogHandler';

/**
 * Use the dialog opener function
 * 
 * @returns The opener function
 */
export function useDialogOpener () {
  const openDialog = useContext<Opener>(OpenerContext);

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
export function useDialogParams<T>(id: string) {
  const state = useContext<State<T>>(ParamsContext);

  if (!state[id]) {
    return { open: false };
  }

  return state[id];
}