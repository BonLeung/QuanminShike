import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class MyVc extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <Text>MyVc</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
