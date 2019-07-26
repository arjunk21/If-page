/** @format */

import 'isomorphic-fetch'
import './src/styles/main.scss'

import React from 'react'

// ApolloProvider

export const wrapRootElement = ({ element }) => <div>{element}</div>
