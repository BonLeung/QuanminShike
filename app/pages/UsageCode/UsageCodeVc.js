import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, FlatList } from 'react-native'
import Navbar from '../../components/base/Navbar'
import UsageCodeItem from './components/UsageCodeItem'

const usageCodeList = [{
  id: 1,
  status: 0,
  goodsImg: require('../../resource/images/Home/goods-img.png'),
  code: 2236598,
  name: '身心按摩放松60分钟',
  endTime: '2018-12-31 12:00'
}, {
  id: 1,
  status: 1,
  goodsImg: require('../../resource/images/Home/goods-img.png'),
  code: 2236598,
  name: '身心按摩放松60分钟',
  endTime: '2018-12-31 12:00'
}, {
  id: 1,
  status: 1,
  goodsImg: require('../../resource/images/Home/goods-img.png'),
  code: 2236598,
  name: '身心按摩放松60分钟',
  endTime: '2018-12-31 12:00'
}, {
  id: 1,
  status: 1,
  goodsImg: require('../../resource/images/Home/goods-img.png'),
  code: 2236598,
  name: '身心按摩放松60分钟',
  endTime: '2018-12-31 12:00'
}, {
  id: 1,
  status: 1,
  goodsImg: require('../../resource/images/Home/goods-img.png'),
  code: 2236598,
  name: '身心按摩放松60分钟',
  endTime: '2018-12-31 12:00'
}]

export default class UsageCodeVc extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Navbar title="我的使用码" navigation={this.props.navigation} />
        <View style={styles.content}>
          <FlatList
            data={usageCodeList}
            extraData={this.state}
            keyExtractor={(item, index) => `usagecode${item.id}`}
            renderItem={this.renderUsageCodeItem}
            style={styles.list}
          />
        </View>
      </View>
    )
  }

  renderUsageCodeItem = ({item}) => (
    <View style={styles.item}>
      <UsageCodeItem {...item} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: "#fff"
  },
  list: {
    padding: 12,
  },
  item: {
    marginBottom: 10
  }
})
