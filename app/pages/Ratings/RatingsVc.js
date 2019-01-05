import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, FlatList } from 'react-native'
import Navbar from '../../components/base/Navbar'
import RatingsItem from './componnents/RatingsItem'

const ratings = [{
  id: 1,
  avatar: require('../../resource/images/test/avatar.png'),
  name: '某某某',
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

export default class RatingsVc extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Navbar title="全部评价(500)" navigation={this.props.navigation} />
        <View style={styles.content}>
          <FlatList
            data={ratings}
            extraData={this.state}
            keyExtractor={(item, index) => `rating${item.id}`}
            renderItem={this.renderRatingsItem}
            style={styles.ratingsList}
          />
        </View>
      </View>
    )
  }

  renderRatingsItem = ({item}) => (
    <RatingsItem {...item} />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    flex: 1,
  },
  ratingsList: {
    flex: 1,
  },
})
