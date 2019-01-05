import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default class UsageCodeItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={this.props.goodsImg} />
        <View style={styles.content}>
          <View style={styles.infoWrap}>
            <View style={styles.infoItem}>
              <Text style={styles.attr}>使&nbsp;用&nbsp;码:</Text>
              <Text style={styles.code}>{this.props.code}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.attr}>商品名称:</Text>
              <Text style={styles.goodsName} numberOfLines={1}>{this.props.name}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.attr}>有&nbsp;效&nbsp;期:</Text>
              <Text style={styles.endTime}>{this.props.endTime}</Text>
            </View>
          </View>
          <View style={this.props.status == 0 ? styles.unusedBtn : styles.usedBtn}>
            <Text style={this.props.status == 0 ? styles.unusedText : styles.usedText}>{this.props.status == 0 ? '待使用' : '已使用'}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    shadowColor: "rgba(190, 190, 190, .4)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  img: {
    width: 85,
    height: 85,
    backgroundColor: "#ccc",
    borderRadius: 5,
  },
  content: {
    marginLeft: 16,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  infoWrap: {
    flex: 1,
    height: 80,
    justifyContent: "center"
  },
  infoItem: {
    height: 22,
    lineHeight: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  attr: {
    width: 50,
    fontFamily: "PingFang-SC-Medium",
    fontWeight: '400',
    fontSize: 11,
    color: "#222"
  },
  code: {
    height: 20,
    lineHeight: 20,
    marginLeft: 8,
    fontFamily: "PingFang-SC-Medium",
    fontWeight: '400',
    fontSize: 18,
    color: "#222"
  },
  goodsName: {
    marginLeft: 8,
    flex: 1,
    fontSize: 11,
    color: "#222"
  },
  endTime: {
    marginLeft: 8,
    fontSize: 11,
    color: "#222"
  },
  unusedBtn: {
    width: 55,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#01C5B0",
    borderWidth: .5,
    borderRadius: 3,
  },
  unusedText: {
    fontSize: 11,
    color: "#01C5B0"
  },
  usedBtn: {
    width: 55,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#999",
    borderWidth: .5,
    borderRadius: 3,
  },
  usedText: {
    fontSize: 11,
    color: "#999"
  }
})
