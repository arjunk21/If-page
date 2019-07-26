/** @format */

import React from 'react'

const defaultContextValue = {
  state: {}
}

const { Provider, Consumer } = React.createContext(defaultContextValue)

class ContextProvider extends React.Component {
  constructor() {
    super()

    this.state = {
      ...defaultContextValue,
      set: this.setData
    }
  }

  setData = newData => {
    this.setState(state => ({
      state: {
        ...state.state,
        ...newData
      }
    }))
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export const withStoreContext = Component => {
  return props => <Consumer>{context => <Component {...props} storeContext={context} />}</Consumer>
}

export { Consumer as default, ContextProvider }
