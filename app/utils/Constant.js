import {
  Platform
} from 'react-native'
import Screen from './Screen'

export const isIOS = Platform.OS === 'ios'
export const isIphoneX = isIOS &&
  ((Screen.width === 375 && Screen.height === 812) || (Screen.width === 414 && Screen.height === 896))

export const paddingIpxBottom = isIphoneX ? 34 : 0
export const iphoneBottomSpace = isIphoneX ? 34 : 0
export const sizeHeaderMarginTop = isIphoneX ? 35 : isIOS ? 20 : 0

// statusbar
export const androidStatusbarHeight = 20
export const iphoneStatusbarHeight = isIphoneX ? 44 : 20
export const statusbarHeight = isIOS ? iphoneStatusbarHeight : androidStatusbarHeight

// navbar
export const navHeight = 44
export const iosNavHeaderHeight = navHeight + iphoneStatusbarHeight
export const androidNavHeaderHeight = navHeight + androidStatusbarHeight
export const navHeaderHeight = isIOS ? iosNavHeaderHeight : androidNavHeaderHeight
