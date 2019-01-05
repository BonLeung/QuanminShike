import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import HomeVc from '../Home/HomeVc'
import SaveVc from '../Save/SaveVc'
import PlayEarnVc from '../PlayEarn/PlayEarnVc'
import MyVc from '../My/MyVc'
import Screen from '../../utils/Screen';
import { paddingIpxBottom } from '../../utils/Constant';

export default class MainVc extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedTab: 'HomeVc'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderTabNavigator()}
      </View>
    )
  }

  _renderTabNavigator() {
    return (
      <TabNavigator tabBarStyle={styles.tabBarStyle}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'HomeVc'}
          title='首页'
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.selectedTitleStyle}
          renderIcon={() => <Image source={require('../../resource/images/tab/home.png')} />}
          renderSelectedIcon={() => <Image source={require('../../resource/images/tab/home-active.png')} />}
          onPress={() => this.setState({selectedTab: 'HomeVc'})}
          style={styles.tabBarItemStyle}
        >
          <HomeVc navigation={this.props.navigation} />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'SaveVc'}
          title='省钱'
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.selectedTitleStyle}
          renderIcon={() => <Image source={require('../../resource/images/tab/save.png')} />}
          renderSelectedIcon={() => <Image source={require('../../resource/images/tab/save-active.png')} />}
          onPress={() => this.setState({selectedTab: 'SaveVc'})}
          style={styles.tabBarItemStyle}
        >
          <SaveVc />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'PlayEarnVc'}
          title='玩赚'
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.selectedTitleStyle}
          renderIcon={() => <Image source={require('../../resource/images/tab/playearn.png')} />}
          renderSelectedIcon={() => <Image source={require('../../resource/images/tab/playearn-active.png')} />}
          onPress={() => this.setState({selectedTab: 'PlayEarnVc'})}
          style={styles.tabBarItemStyle}
        >
          <PlayEarnVc />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'MyVc'}
          title='个人'
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.selectedTitleStyle}
          renderIcon={() => <Image source={require('../../resource/images/tab/my.png')} />}
          renderSelectedIcon={() => <Image source={require('../../resource/images/tab/my-active.png')} />}
          onPress={() => this.setState({selectedTab: 'MyVc'})}
          style={styles.tabBarItemStyle}
        >
          <MyVc />
        </TabNavigator.Item>
      </TabNavigator>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: Screen.width,
    height: '100%',
    backgroundColor: "#fff",
    paddingBottom: paddingIpxBottom,
  },
  tabBarStyle: {
    height: 49,
    backgroundColor: "#fff",
  },
  tabBarItemStyle: {

  },
  titleStyle: {
    fontSize: 10,
    color: "#222"
  },
  selectedTitleStyle: {
    fontSize: 10,
    color: "#01C5B0"
  }
})
