import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import * as actions from '../actions';
import { connect } from 'react-redux';

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

export default class Cat extends Component {
  _onClick() {
    //this.fetchCategories(this.props.text['en'])
  }
  render() {
    return (
      <TouchableOpacity
        onPress={() => this._onClick()}
        style={styles.container}
      >
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: WIDTH,
    borderWidth: 5,
    borderColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 25
  },
  text: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 35
  }
});
