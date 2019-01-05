import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Text, Image, ImageBackground, TouchableWithoutFeedback } from 'react-native'
import Swiper from 'react-native-swiper'
import CommonTitle from './CommonTitle'

const shopList = [{
  id: 1,
  name: '商店名称名称名称名称',
  thumbnail: require('../../../resource/images/Home/shop-thumbnail.png')
}, {
  id: 2,
  name: '商店名称名称名称名称',
  thumbnail: require('../../../resource/images/Home/shop-thumbnail.png')
}, {
  id: 3,
  name: '商店名称名称名称名称',
  thumbnail: require('../../../resource/images/Home/shop-thumbnail.png')
}, {
  id: 4,
  name: '商店名称名称名称名称',
  thumbnail: require('../../../resource/images/Home/shop-thumbnail.png')
}]

const discounts = [{
  id: 1,
  imgUrl: require('../../../resource/images/Home/discount1.png')
}, {
  id: 2,
  imgUrl: require('../../../resource/images/Home/discount2.png')
}]

export default class FreeEat extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sortWay: 0
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.swiperWrap}>
          <Swiper
            style={styles.swiper}
            showsButtons={false}
            showsPagination={false}
          >
            <View style={styles.slide}>
              <Image style={styles.slideImg} source={require('../../../resource/images/Home/banner.png')} />
            </View>
          </Swiper>
        </View>
        <View style={styles.content}>
          <View style={styles.classListWrap}>
            <View style={styles.classList}>
              <TouchableWithoutFeedback>
                <View style={styles.classItem}>
                  <Image style={styles.classIcon} source={require('../../../resource/images/Home/ic-cate.png')} />
                  <Text style={styles.className}>美食</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <View style={styles.classItem}>
                  <Image style={styles.classIcon} source={require('../../../resource/images/Home/ic-beauty.png')} />
                  <Text style={styles.className}>美容</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <View style={styles.classItem}>
                  <Image style={styles.classIcon} source={require('../../../resource/images/Home/ic-recreation.png')} />
                  <Text style={styles.className}>娱乐</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <View style={styles.classItem}>
                  <Image style={styles.classIcon} source={require('../../../resource/images/Home/ic-health.png')} />
                  <Text style={styles.className}>健康</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <View style={styles.classItem}>
                  <Image style={styles.classIcon} source={require('../../../resource/images/Home/ic-sport.png')} />
                  <Text style={styles.className}>运动</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={styles.navWrap}>
            <ImageBackground source={require('../../../resource/images/Home/navbg.png')} style={{height: 117}}>
              <View style={styles.navList}>
                <TouchableWithoutFeedback>
                  <View style={styles.navItem}>
                    <Image style={styles.navIcon} source={require('../../../resource/images/Home/nav1.png')} />
                    <Text style={styles.navName}>愿望清单</Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.push('RulesVc')}>
                  <View style={styles.navItem}>
                    <Image style={styles.navIcon} source={require('../../../resource/images/Home/nav2.png')} />
                    <Text style={styles.navName}>规则说明</Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.push('UsageCodeVc')}>
                  <View style={styles.navItem}>
                    <Image style={styles.navIcon} source={require('../../../resource/images/Home/nav3.png')} />
                    <Text style={styles.navName}>我的免费</Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.push('EnterVc')}>
                  <View style={styles.navItem}>
                    <Image style={styles.navIcon} source={require('../../../resource/images/Home/nav4.png')} />
                    <Text style={styles.navName}>商家入驻</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.discountWrap}>
          {
            discounts.map(item => (
              <TouchableWithoutFeedback>
                <View style={styles.discountItem}>
                  <Image style={styles.discountImg} source={item.imgUrl} />
                </View>
              </TouchableWithoutFeedback>
            ))
          }
          </View>
          <View style={styles.recommendGoodsWrap}>
            <CommonTitle title="推荐商品" />
            <View style={styles.recommendGoods}>
              <View style={styles.verticalList}>
                <View style={styles.vertical}>
                  <View style={styles.verticalInfoWrap}>
                    <Text style={styles.manufacturer}>海外制造商</Text>
                    <View style={styles.line}></View>
                    <Text style={styles.price}>9.9元起</Text>
                  </View>
                  <Image style={styles.verticalGoodsImg} source={require('../../../resource/images/Home/goods-img.png')} />
                </View>
                <View style={styles.vertical}>
                  <View style={styles.verticalInfoWrap}>
                    <Text style={styles.manufacturer}>CK制造商</Text>
                    <View style={styles.line}></View>
                    <Text style={styles.price}>9.9元起</Text>
                  </View>
                  <Image style={styles.verticalGoodsImg} source={require('../../../resource/images/Home/goods-img.png')} />
                </View>
              </View>
              <View style={styles.horizonalList}>
                <View style={styles.horizonal}>
                  <View style={styles.horizonalInfoWrap}>
                    <Text style={styles.manufacturer}>新秀丽制造商</Text>
                    <View style={styles.line}></View>
                    <Text style={styles.price}>34.9元起</Text>
                  </View>
                  <Image style={styles.goodsImg} source={require('../../../resource/images/Home/goods-img.png')} />
                </View>
                <View style={styles.horizonal}>
                  <View style={styles.horizonalInfoWrap}>
                    <Text style={styles.manufacturer}>MUJI制造商</Text>
                    <View style={styles.line}></View>
                    <Text style={styles.price}>34.9元起</Text>
                  </View>
                  <Image style={styles.goodsImg} source={require('../../../resource/images/Home/goods-img.png')} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.recommendShopWrap}>
            <CommonTitle title="推荐商家" />
            <View style={styles.sortWrap}>
              <View style={styles.sortList}>
                <TouchableWithoutFeedback onPress={() => this.handleSort(0)}>
                  <View style={styles.sortItem}>
                    <Text style={this.state.sortWay === 0 ? styles.sortNameActive : styles.sortName}>销量最高</Text>
                  </View>
                </TouchableWithoutFeedback>
                <View style={styles.dividing}></View>
                <TouchableWithoutFeedback onPress={() => this.handleSort(1)}>
                  <View style={styles.sortItem}>
                    <Text style={this.state.sortWay === 1 ? styles.sortNameActive : styles.sortName}>价格最低</Text>
                  </View>
                </TouchableWithoutFeedback>
                <View style={styles.dividing}></View>
                <TouchableWithoutFeedback onPress={() => this.handleSort(2)}>
                  <View style={styles.sortItem}>
                    <Text style={this.state.sortWay === 2 ? styles.sortNameActive : styles.sortName}>价格最高</Text>
                  </View>
                </TouchableWithoutFeedback>
                <View style={styles.dividing}></View>
                <TouchableWithoutFeedback onPress={() => this.handleSort(3)}>
                  <View style={styles.sortItem}>
                    <Text style={this.state.sortWay === 3 ? styles.sortNameActive : styles.sortName}>距离最近</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
            <View style={styles.shopList}>
            {
              shopList.map(item => (
                <TouchableWithoutFeedback onPress={() => this.props.navigation.push('ShopDetailVc')}>
                  <View style={styles.shopItem} key={`shopItem${item.id}`}>
                    <Image style={styles.shopImg} source={item.thumbnail} />
                    <Text style={styles.shopName} numberOfLines={1}>{item.name}</Text>
                  </View>
                </TouchableWithoutFeedback>
              ))
            }
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

  handleSort = (sortWay) => {
    this.setState({
      sortWay
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4"
  },
  swiperWrap: {
    height: 178,
  },
  swiper: {
    flex: 1,
  },
  slide: {
    flex: 1,
  },
  slideImg: {
    width: '100%',
    height: '100%',
  },
  classListWrap: {
    height: 110,
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  classList: {
    flexDirection: "row",
    alignItems: "center"
  },
  classItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  classIcon: {
    width: 43,
    height: 43,
  },
  className: {
    letterSpacing: 1,
    lineHeight: 25,
    fontSize: 13,
    color: "#222"
  },
  navWrap: {
    marginTop: 10,
    height: 120,
    // justifyContent: "center",
    backgroundColor: "#fff"
  },
  navList: {
    flexDirection: "row",
    alignItems: "center"
  },
  navItem: {
    flex: 1,
    height: 120,
    justifyContent: "center",
    alignItems: "center"
  },
  navIcon: {
    // width: 67,
    // height: 55,
  },
  navName: {
    marginTop: 6,
    fontSize: 14,
    color: "#FF7400",
    textShadowColor: "#fff",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 0,
  },
  discountWrap: {
    marginTop: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  discountItem: {
    width: '50%',
    height: 100,
  },
  discountImg: {
    width: '100%',
    height: '100%'
  },
  recommendGoodsWrap: {
    marginTop: 10,
    backgroundColor: "#fff",
  },
  recommendGoods: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 5,
    paddingBottom: 12,
    flexDirection: "row"
  },
  verticalList: {
    flexDirection: "row"
  },
  vertical: {
    width: 110,
    height: 120,
    marginRight: 5,
    backgroundColor: "#fdf7f1",
    justifyContent: "space-between",
    alignItems: "center"
  },
  manufacturer: {
    marginTop: 4,
    lineHeight: 16,
    fontFamily: "PingFang-SC-Regular",
    fontSize: 11,
    color: "#333",
  },
  line: {
    marginTop: 2,
    marginBottom: 2,
    width: 23,
    height: .5,
    backgroundColor: "#666"
  },
  price: {
    lineHeight: 16,
    fontSize: 11,
    color: "#333"
  },
  goodsImg: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 58,
    height: 58,
    zIndex: -1,
  },
  verticalGoodsImg: {
    width: 70,
    height: 70
  },
  verticalInfoWrap: {
    alignItems: "center"
  },
  horizonalList: {
    flex: 1,
    justifyContent: "space-between"
  },
  horizonal: {
    height: 58,
    backgroundColor: "#F4F6F9",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  horizonalInfoWrap: {
    marginLeft: 5,
  },
  recommendShopWrap: {
    marginTop: 10,
    backgroundColor: "#fff"
  },
  sortWrap: {
    height: 33,
    borderColor: "#eee",
    borderTopWidth: .5,
    borderBottomWidth: .5,
  },
  sortList: {
    flexDirection: "row",
    alignItems: "center"
  },
  sortItem: {
    flex: 1,
    height: 33,
    justifyContent: "center",
    alignItems: "center",
  },
  sortName: {
    fontSize: 12,
    color: "#999"
  },
  sortNameActive: {
    fontSize: 12,
    color: "#222"
  },
  dividing: {
    width: .5,
    height: 16,
    backgroundColor: "#eee"
  },
  shopList: {
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  shopItem: {
    width: '48%',
    marginBottom: 10,
    alignItems: "center"
  },
  shopImg: {
    width: '100%',
    height: 152,
    borderRadius: 5,
  },
  shopName: {
    lineHeight: 33,
    fontSize: 13,
    color: "#222"
  }
})
