import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Text, Image, TouchableWithoutFeedback, Linking } from 'react-native'
import Navbar from '../../components/base/Navbar'
import RatingsItem from '../Ratings/componnents/RatingsItem'

const ratings = [{
  id: 1,
  avatar: require('../../resource/images/test/avatar.png'),
  name: '胡歌',
  stars: 4,
  comment: '很不错，物美价廉很不错',
  imgs: [
    // require('../../resource/images/Home/goods-img.png')
  ],
  reply: '谢谢您的支持，我们会继续提高服务质量'
}, {
  id: 2,
  avatar: require('../../resource/images/test/avatar.png'),
  name: '某某某',
  stars: 4,
  comment: '很不错，物美价廉很不错',
  imgs: [
    // require('../../resource/images/Home/goods-img.png')
  ],
  reply: ''
}, {
  id: 3,
  avatar: require('../../resource/images/test/avatar.png'),
  name: '某某某',
  stars: 4,
  comment: '很不错，物美价廉很不错',
  imgs: [
    require('../../resource/images/Home/goods-img.png'),
    require('../../resource/images/Home/goods-img.png')
  ],
  reply: ''
}]

export default class ShopDetailVc extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Navbar title="门店详情" navigation={this.props.navigation} />
        <ScrollView style={styles.content}>
          <View style={styles.shopInfo}>
            <Image style={styles.headImg} source={require('../../resource/images/Home/shop-img.png')} />
            <View style={styles.infoContent}>
              <Text style={styles.shopName}>广州海珠琶洲安置新区店</Text>
              <View style={styles.otherInfo}>
                <View style={styles.addressWrap}>
                  <View style={styles.addressInfo}>
                    <Image style={styles.addressIcon} source={require('../../resource/images/public/ic-location.png')} />
                    <Text style={styles.address}>广州市海珠区琶洲安置新社区（猎德大桥南）</Text>
                  </View>
                  <View style={styles.distanceInfo}>
                    <Image style={styles.distanceIcon} source={require('../../resource/images/public/ic-nav.png')} />
                    <Text style={styles.distance}>2.00km</Text>
                  </View>
                </View>
                <View style={styles.phoneWrap}>
                  <TouchableWithoutFeedback onPress={() => this.call()}>
                    <Image source={require('../../resource/images/public/ic-phone.png')} />
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.descWrap}>
            <Text style={styles.descTitle}>店铺简介</Text>
            <Text style={styles.shopDesc}>兰芳园是香港一间历史悠久的茶餐厅，总店位于香港岛中环结志街2号及4A-6号，早年以大牌档形式经营，现时除设于大厦的旧店及新店两间店铺外。</Text>
          </View>
          <View style={styles.goodsWrap}>
            <Image style={styles.goodsImg} source={require('../../resource/images/Home/goods-img.png')} />
            <View style={styles.goodsContent}>
              <Text style={styles.goodsName}>招牌柠檬茶</Text>
              <Text style={styles.remain}>剩余 28</Text>
              <Text style={styles.goodsDesc} numberOfLines={1}>独特的茶底，搭配新鲜的柠檬，带给你一个清爽..</Text>
              <TouchableWithoutFeedback>
                <View style={styles.exchangeBtn}>
                  <Text style={styles.exchangeBtnText}>兑换</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={styles.ratingWrap}>
            <View style={styles.ratingHeader}>
              <Text style={styles.ratingTitle}>商品评价(500)</Text>
              <TouchableWithoutFeedback onPress={() => this.props.navigation.push('RatingsVc')}>
                <View style={styles.more}>
                  <Text style={styles.moreText}>查看全部评价</Text>
                  <Image source={require('../../resource/images/public/ic-right.png')} />
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.ratingsList}>
              {ratings.map(item => (
                <RatingsItem {...item} />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }

  call = () => {
    Linking.openURL('tel:18814142323');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: "#f4f4f4"
  },
  shopInfo: {
    backgroundColor: "#fff"
  },
  headImg: {
    width: '100%',
  },
  infoContent: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 12,
  },
  shopName: {
    marginTop: 10,
    fontFamily: "PingFang-SC-Medium",
    fontSize: 14,
    fontWeight: '400',
    color: "#222"
  },
  otherInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  addressWrap: {
    flex: 1,
  },
  addressInfo: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center"
  },
  address: {
    marginLeft: 9,
    fontSize: 11,
    fontWeight: '300',
    color: "#222"
  },
  distanceInfo: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center"
  },
  distance: {
    marginLeft: 6,
    fontSize: 11,
    color: "#aaa"
  },
  phoneWrap: {
    height: 30,
    paddingLeft: 14,
    borderLeftWidth: .5,
    borderColor: "#e6e6e6",
    justifyContent: "center",
    alignItems: "center"
  },
  descWrap: {
    marginTop: 10,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "#fff"
  },
  descTitle: {
    fontSize: 14,
    fontFamily: "PingFang-SC-Medium",
    fontWeight: '400',
    color: "#222",
  },
  shopDesc: {
    marginTop: 6,
    lineHeight: 16,
    fontFamily: "PingFang-SC-Medium",
    fontWeight: '400',
    fontSize: 12,
    color: "#999"
  },
  goodsWrap: {
    marginTop: 10,
    padding: 12,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  goodsImg: {
    width: 120,
    height: 90,
  },
  goodsContent: {
    flex: 1,
    marginLeft: 15,
  },
  goodsName: {
    fontFamily: "PingFang-SC-Medium",
    fontWeight: '400',
    fontSize: 14,
    color: "#222"
  },
  remain: {
    marginTop: 24,
    fontFamily: "PingFang-SC-Medium",
    fontWeight: '400',
    fontSize: 11,
    color: "#999"
  },
  goodsDesc: {
    marginTop: 14,
    fontSize: 10,
    fontFamily: "PingFang-SC-Medium",
    fontWeight: '400',
    color: "#999",
  },
  exchangeBtn: {
    position: "absolute",
    right: 0,
    top: 35,
    width: 63,
    height: 23,
    backgroundColor: "#01C5B0",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  exchangeBtnText: {
    fontSize: 10,
    color: "#fff"
  },
  ratingWrap: {
    marginTop: 10,
    backgroundColor: "#fff"
  },
  ratingHeader: {
    height: 40,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#E6E6E6",
    borderBottomWidth: .5,
  },
  ratingTitle: {
    fontFamily: "PingFang-SC-Medium",
    fontWeight: '400',
    fontSize: 14,
    color: "#222"
  },
  more: {
    height: '100%',
    flexDirection: "row",
    alignItems: "center"
  },
  moreText: {
    marginRight: 9,
    fontFamily: "PingFang-SC-Medium",
    fontWeight: '300',
    fontSize: 12,
    color: "#999"
  }
})
