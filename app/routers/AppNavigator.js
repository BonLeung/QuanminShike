import {
  createStackNavigator
} from 'react-navigation'
import MainVc from '../pages/Main/MainVc'
import ShopDetailVc from '../pages/ShopDetail/ShopDetailVc'
import RatingsVc from '../pages/Ratings/RatingsVc'
import EnterVc from '../pages/Enter/EnterVc'
import RulesVc from '../pages/Rules/RulesVc'
import UsageCodeVc from '../pages/UsageCode/UsageCodeVc'

const AppNavigator = createStackNavigator({
  MainVc: {
    screen: MainVc,
    navigationOptions: {
      header: null
    }
  },
  ShopDetailVc: {
    screen: ShopDetailVc,
    navigationOptions: {
      header: null
    }
  },
  RatingsVc: {
    screen: RatingsVc,
    navigationOptions: {
      header: null
    }
  },
  EnterVc: {
    screen: EnterVc,
    navigationOptions: {
      header: null
    }
  },
  RulesVc: {
    screen: RulesVc,
    navigationOptions: {
      header: null
    }
  },
  UsageCodeVc: {
    screen: UsageCodeVc,
    navigationOptions: {
      header: null
    }
  }
}, {
  initialRouteName: 'MainVc',
  headerMode: 'float'
})

export default AppNavigator
