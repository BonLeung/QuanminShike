import {
  Dimensions,
  PixelRatio
} from 'react-native'

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  scale: Dimensions.get('window').scale,
  onPixel: 1 / PixelRatio.get()
}

export default Screen
