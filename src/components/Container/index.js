import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
})

export default class App extends Component {
  render() {
    return (
      <View style={[styles.container, { width: this.props.width }]}>
        {this.props.children}
      </View>
    )
  }
}
