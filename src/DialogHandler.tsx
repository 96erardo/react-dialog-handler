import React from 'react';

type Props = {
  children: React.ReactElement
};

export type State<T = any> = {
  [key: string]: {
    open: boolean,
    params?: T
  }
}

export type Opener = <T= any>(id: string, params: T) => void;

export type Closer = (id: string) => void

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const OpenerContext = React.createContext<Opener>((id, params) => {});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CloserContext = React.createContext<Closer>((id) => {});

export const ParamsContext = React.createContext<State>({});

export class DialogHandler extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};

    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
  }

  openDialog<T= any>(id: string, params: T) {
    this.setState((prevState) => ({
      ...prevState,
      [id]: {
        open: true,
        params,
      },
    }));
  }

  closeDialog(id: string) {
    this.setState((prevState) => ({
      ...prevState,
      [id]: { open: false },
    }));
  }

  render() {
    const { children } = this.props;

    return (
      <OpenerContext.Provider value={this.openDialog}>
        <CloserContext.Provider value={this.closeDialog}>
          <ParamsContext.Provider value={this.state}>
            {children}
          </ParamsContext.Provider>
        </CloserContext.Provider>
      </OpenerContext.Provider>
    );
  }
}
