import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { statusbarHeight, navHeaderHeight } from '../../utils/Constant'
import FreeEat from './components/FreeEat'
import FreeGet from './components/FreeGet'
import Screen from '../../utils/Screen';

const tabs = [{
  id: 0,
  name: '免费吃'
}, {
  id: 1,
  name: '免费领'
}]

export default class HomeVc extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tabIndex: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.locationWrap}>
            <Image
              style={styles.locationIcon}
              source={require('../../resource/images/public/ic-location.png')}
            />
            <Text style={styles.location} numberOfLines={1}>定位地址</Text>
          </View>
          <View style={styles.searchWrap}>
            <Image
              style={styles.searchIcon}
              source={require('../../resource/images/public/ic-search.png')}
            />
            <TextInput
              placeholder="输入商家名称"
              placeholderTextColor="#999"
              style={styles.searchInput}
            />
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.tabWrap}>
            {
              tabs.map((item, index) => (
                <TouchableWithoutFeedback
                  onPress={() => this.setState({tabIndex: index})}
                >
                  <View style={index === this.state.tabIndex ? styles.tabItemActive : styles.tabItem}>
                    <Text style={index === this.state.tabIndex ? styles.tabNameActive : styles.tabName}>{item.name}</Text>
                  </View>
                </TouchableWithoutFeedback>
              ))
            }
          </View>
          <View style={styles.tabContent}>
            {
              this.state.tabIndex === 0
              ? <FreeEat navigation={this.props.navigation} />
              : <FreeGet n avigation={this.props.navigation} />
            }
          </View>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    paddingTop: statusbarHeight,
    height: navHeaderHeight,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    shadowColor: "#666",
    shadowOpacity: .3,
    shadowOffset: {
      width: 1,
      height: 0,
    },
    shadowRadius: 1,
    zIndex: 10,
  },
  locationWrap: {
    paddingLeft: 10,
    width: 85,
    flexDirection: "row",
    alignItems: "center"
  },
  locationIcon: {
    marginLeft: 3,
  },
  location: {
    marginLeft: 10,
    fontSize: 12,
    color: "#333"
  },
  searchWrap: {
    flex: 1,
    height: 33,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(102, 102, 102, .1)",
    borderRadius: 5,
  },
  searchIcon: {
    marginLeft: 10,
  },
  searchInput: {
    flex: 1,
    height: 33,
    lineHeight: 33,
    marginLeft: 10,
    fontSize: 12,
    color: "#222"
  },
  content: {
    flex: 1,
  },
  tabWrap: {
    height: 38,
    flexDirection: "row",
    shadowColor: "#666",
    shadowOpacity: .3,
    shadowOffset: {
      width: 1,
      height: 0,
    },
    shadowRadius: 1,
    zIndex: 9,
  },
  tabItem: {
    flex: 1,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4"
  },
  tabItemActive: {
    flex: 1,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#01C5B0"
  },
  tabName: {
    fontSize: 14,
    color: "#222"
  },
  tabNameActive: {
    letterSpacing: 2,
    fontSize: 14,
    color: "#fff"
  },
  tabContent: {
    flex: 1,
  }
})
