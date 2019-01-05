import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default class RatingsItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={this.props.avatar} />
        <View style={styles.ratingsContent}>
          <Text style={styles.name}>{this.props.name}</Text>
          <View style={styles.starsWrap}>
            <Image style={styles.star} source={require('../../../resource/images/public/star-full-s.png')} />
            <Image style={styles.star} source={require('../../../resource/images/public/star-full-s.png')} />
            <Image style={styles.star} source={require('../../../resource/images/public/star-full-s.png')} />
            <Image style={styles.star} source={require('../../../resource/images/public/star-full-s.png')} />
            <Image style={styles.star} source={require('../../../resource/images/public/star-empty-s.png')} />
          </View>
          <Text style={styles.comment}>{this.props.comment}</Text>
          {
            this.props.imgs.length > 0
            ? <View style={styles.imgsWrap}>
              {
                this.props.imgs.map((item, index) => (
                  <Image style={styles.commentImg} source={item} key={`${item}-${index}`} />
                ))
              }
              </View>
            : null
          }

          <Text style={styles.time}>2018.08.10</Text>
          {
            this.props.reply
            ? <View style={styles.replyWrap}>
                <Text style={styles.replyTitle}>商家回复:</Text>
                <Text style={styles.replyText}>{this.props.reply}</Text>
              </View>
            : null
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 18,
    paddingBottom: 16,
    borderColor: "#e6e6e6",
    borderBottomWidth: .5,
    flexDirection: "row",
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  ratingsContent: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    marginTop: 6,
    fontSize: 11,
    color: "#222"
  },
  starsWrap: {
    marginTop: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  comment: {
    marginTop: 8,
    lineHeight: 20,
    fontSize: 13,
    color: "#222"
  },
  imgsWrap: {
    marginTop: 10,
    flexDirection: "row"
  },
  commentImg: {
    marginRight: 8,
    width: 53,
    height: 53,
  },
  time: {
    position: "absolute",
    right: 0,
    top: 5,
    fontSize: 11,
    color: "#aaa"
  },
  replyWrap: {
    width: '100%',
    marginTop: 10,
    paddingTop: 16,
    borderColor: "#e6e6e6",
    borderTopWidth: .5,
  },
  replyTitle: {
    fontSize: 13,
    color: "#222"
  },
  replyText: {
    lineHeight: 20,
    fontSize: 13,
    color: "#222"
  }
})
