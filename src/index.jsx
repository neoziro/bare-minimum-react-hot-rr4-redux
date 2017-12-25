import React from 'react'
import ReactDOM from 'react-dom'
import RootApp from './RootApp'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <RootApp />
  </Provider>,
  document.getElementById('root'),
)
