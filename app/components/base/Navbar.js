import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import { navHeaderHeight, statusbarHeight } from '../../utils/Constant'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftItem}>
          <TouchableWithoutFeedback onPress={() => this.handleLeftPress()}>
            <View style={styles.iconWrap}>
              <Image source={require('../../resource/images/public/ic-back.png')} />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.titleItem}>
          <Text style={styles.title} numberOfLines={1}>{this.props.title}</Text>
        </View>
        <View style={styles.rightItem}></View>
      </View>
    )
  }

  handleLeftPress = () => {
    this.props.navigation.goBack()
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: statusbarHeight,
    height: navHeaderHeight,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: .5,
    borderColor: "rgba(153, 153, 153, .3)"
  },
  leftItem: {
    width: 30,
    height: '100%',
  },
  iconWrap: {
    width: 30,
    height: '100%',
    justifyContent: "center",
    alignItems: "center"
  },
  titleItem: {
    flex: 1,
    height: '100%',
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: "#222"
  },
  rightItem: {
    width: 30,
    height: '100%',
  }
})
