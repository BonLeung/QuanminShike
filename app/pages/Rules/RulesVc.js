import React, { Component } from 'react'
import { StyleSheet, View, Image, ScrollView, Text } from 'react-native'
import Navbar from '../../components/base/Navbar'

export default class RulesVc extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Navbar title="规则说明" navigation={this.props.navigation} />
        <ScrollView style={styles.content}>
          <Text style={styles.rules}>本网站所有VRF协议图片及素材均由本公司或版权所有人授权发布，如果您侵犯了该图片素材或素材的知识产权，上海韩众网络科技有限公司有权依据著作权侵权惩罚性赔偿标准或最高达50万元人民币的法定标准要求赔偿，且有权不以本网站发布的图片授权价格作为参考标准</Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 12,
    paddingBottom: 12,
  },
  rules: {
    lineHeight: 36,
    letterSpacing: 1,
    fontSize: 12,
    fontFamily: "PingFang-SC-Regular",
    fontWeight: '500',
    color: "#222"
  }
})
