import React from 'react';
import { test, expect, beforeEach, afterEach } from '@jest/globals';
import { render, unmountComponentAtNode } from 'react-dom';
import { DialogHandler } from '../src/DialogHandler';
import { InfoDialog } from './components/InfoDialog';
import { OpenDialogButton } from './components/OpenDialogButton';
import { act } from 'react-dom/test-utils';

let container: HTMLDivElement | null = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  if (container) {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  }
});

test("Dialog behaviour", () => {
  act(() => {
    render(
      <DialogHandler>
        <div>
          <OpenDialogButton />
          <InfoDialog />
        </div>
      </DialogHandler>,
      container
    )
  });

  const opener = document.getElementById("opener");
  const cleanOpener = document.getElementById("clean-opener");
  const dialog = document.getElementById("dialog");
  const closer = dialog?.querySelector("button");
  const name: HTMLInputElement | null = document.querySelector("input[name=name]");
  const lastname: HTMLInputElement | null = document.querySelector("input[name=lastname]");

  expect(dialog?.className).toEqual("closed")

  act(() => {
    opener?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(dialog?.className).toEqual("open");
  expect(name?.value).toEqual("John");
  expect(lastname?.value).toEqual("Doe");

  act(() => {
    closer?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(dialog?.className).toEqual("closed");

  act(() => {
    cleanOpener?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(dialog?.className).toEqual("open");
  expect(name?.value).toEqual("");
  expect(lastname?.value).toEqual("");
});


