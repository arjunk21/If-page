/** @format */

import React from 'react'
import { ContextProvider } from '../context/StoreContext'
import { NotificationsProvider } from '../context/NotificationsContext'

import classes from './index.module.css'

export default ({ children }) => (
  <ContextProvider>
    <NotificationsProvider>
      <div className={classes.wrapper}>{children}</div>
    </NotificationsProvider>
  </ContextProvider>
)
