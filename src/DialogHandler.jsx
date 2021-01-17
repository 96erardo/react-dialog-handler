import React from 'react';

export const OpenerContext = React.createContext((id, params) => {});

export const CloserContext = React.createContext((id) => {});

export const ParamsContext = React.createContext({});

export class DialogHandler extends React.Component {
  constructor (props) {
    super(props);

    this.state = {};

    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
  }

  openDialog(id, params) {
    this.setState(prevState => ({
      ...prevState,
      [id]: {
        open: true,
        params
      }
    }))
  }

  closeDialog (id) {
    this.setState(prevState => ({
      ...prevState,
      [id]: { open: false },
    }));
  }

  render () {
    return (
      <OpenerContext.Provider value={this.openDialog}>
        <CloserContext.Provider value={this.closeDialog}>
          <ParamsContext.Provider value={this.state}>
            {this.props.children}
          </ParamsContext.Provider>
        </CloserContext.Provider>
      </OpenerContext.Provider>
    );
  }
}