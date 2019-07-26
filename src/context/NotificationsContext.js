/** @format */

import React from 'react'
import { AlertList } from 'react-bs-notifier'

const defaultContextValue = {
  alerts: []
}

const { Provider, Consumer } = React.createContext(defaultContextValue)

class NotificationsProvider extends React.Component {
  constructor() {
    super()

    this.state = {
      ...defaultContextValue,
      addMessage: this.addMessage,
      success: this.success,
      error: this.error,
      warning: this.warning,
      info: this.info
    }
  }

  addMessage = ({ type, title, message }) => {
    const newAlert = {
      id: new Date().getTime(),
      type: type,
      headline: title,
      message: <div dangerouslySetInnerHTML={{ __html: message }} />
    }
    this.setState({
      alerts: [...this.state.alerts, newAlert]
    })
  }

  success = data => {
    return this.addMessage({ ...data, type: 'success' })
  }

  error = data => {
    return this.addMessage({ ...data, type: 'danger' })
  }

  warning = data => {
    return this.addMessage({ ...data, type: 'warning' })
  }

  info = data => {
    return this.addMessage({ ...data, type: 'info' })
  }

  onDismiss = alert => {
    const alerts = this.state.alerts
    // find the index of the alert that was dismissed
    const idx = alerts.indexOf(alert)
    if (idx >= 0) {
      this.setState({
        // remove the alert from the array
        alerts: [...alerts.slice(0, idx), ...alerts.slice(idx + 1)]
      })
    }
  }

  render() {
    return (
      <Provider value={this.state}>
        <AlertList position={`top-right`} alerts={this.state.alerts} timeout={10 * 1000} dismissTitle="Close" onDismiss={this.onDismiss} />
        {this.props.children}
      </Provider>
    )
  }
}

export const withNotifications = Component => {
  return props => <Consumer>{context => <Component {...props} {...context} />}</Consumer>
}

export { Consumer as default, NotificationsProvider }
