import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import AppNavigator from './app/routers/AppNavigator'

const AppContainer = createAppContainer(AppNavigator)

console.disableYellowBox = true
export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <AppContainer />
    )
  }
}
