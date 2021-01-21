# react-dialog-handler
Based on [this](https://github.com/GerardoAGL96/react-dialog-perf-test) problem, react-dialog-handler aims to provide a solution to avoid controlling dialog state through parent components and achieve a less verbose result.

```js
function Button () {
  const openDialog = useDialogOpener();

  return (
    <button onClick={() => openDialog("dialog-id", {/* params */})}>
    
    </button>
  )
}

function Dialog () {
  const { open, params } = useDialogParams("dialog-id");

  return (
    <Dialog open={open}>
      <DialogTitle>{params.title}</DialogTitle>
      ...
    </Dialog>
  )
}
```

## Installation
```
npm install react-dialog-handler
```

## Usage
To make react-dialog-handler work, the first step is to place the DialogHandler on top of the react tree where you want to handle your dialogs.

```js
// App.js
import React from 'react';
import { DialogHandler } from 'react-dialog-handler';

function App () {
  return (
    <Router>
      <DialogHandler>
        <Switch>
          {/*...*/}
        </Switch>
      </DialogHandler>
    </Router>
  );
}
```

After that, you can start using the hooks that came with the package

### `useDialogOpener()`
Sets the open state on the "dialog-id" to true and passes the params to the dialog
```js
  const openDialog = useDialogOpener();  
  // ...
  openDialog<{ name: string }>("dialog-id", { name: "John" });
```

### `useDialogCloser()`
Sets the open state on the "dialog-id" to false and sets the params on the dialog to null
```js
  const closeDialog = useDialogCloser();
  // ...
  closeDialog("dialog-id");
```

### `useDialogParams(id: string)`
Returns the open state of the dialog and the parameters passed to it
```js
  const { open, params } = useParams<{ name: string }>("dialog-id");
  // ...

  if (open && params) {
    console.log(params.name); // John
  }
```

This way you can declare your dialogs with a pattern like this

```js
// FormDialog.tsx
import { useDialogParams, useDialogCloser } from "react-dialog-handler";

export const dialogId = "form-dialog-id";

export const FormDialog: React.FC = () => {
  const { open, params } = useDialogParams<Params>(dialogId);
  const closeDialog = useDialogCloser();

  const onClose = () => closeDialog(dialogId);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {params?.name}
      </DialogTitle>
    </Dialog>
  );
}

export type Params = {
  title: string
}

// View.tsx
import { dialogId, Params } from "./FormDialog";
import { useDialogOpener } from "react-dialog-handler";

export const View: React.FC = () => {
  const openDialog = useDialogOpener();

  const onClick = () => openDialog<Params>(dialogId, { name: "Jhon" })

  return (
    <button>
      open
    </button>
  );
}
```

## Test
```
npm test
```

## Contribute
Feel free to open an issue if you have any problem with the package :)

### Submitting Changes

- Open a new issue in the Issue tracker.
- Fork the repo.
- Create a new feature branch based off the develop branch.
- Make sure all tests pass and there are no linting errors.
- Submit a pull request, referencing any issues it addresses.