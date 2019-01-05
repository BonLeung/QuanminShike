import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, } from 'react-native'
import Navbar from '../../components/base/Navbar'

export default class EnterVc extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Navbar title="商家入驻" navigation={this.props.navigation} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
