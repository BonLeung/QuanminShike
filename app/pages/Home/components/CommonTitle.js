import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'


export default class CommonTitle extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.line}></View>
        <Text style={styles.title}>{this.props.title}</Text>
        <View style={styles.line}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  line: {
    width: 35,
    height: .5,
    backgroundColor: "#666"
  },
  title: {
    marginLeft: 20,
    marginRight: 20,
    letterSpacing: 2,
    fontSize: 14,
    fontWeight: '500',
    color: "#222"
  }
})
