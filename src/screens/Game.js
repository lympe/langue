import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import Btn from '../components/Btn';
import Header from '../components/Header';
import Letter from '../components/Letter';
import AnimatedScreen from '../components/AnimatedScreen';

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: ['B', 'o', 'n', 'j', 'o', 'u', 'r'],
      letter: 0
    };
  }
  _renderWord() {
    return this.state.word.map((item, i) => {
      return <Letter key={i} data={item} ind={i} letter={this.state.letter} />;
    });
  }
  render() {
    return (
      <AnimatedScreen from="right" duration={150} style={styles.container}>
        <Text style={styles.word}>Chat</Text>
        <View style={styles.wordWrapper}>{this._renderWord()}</View>
        <View style={styles.propositionsWrapper} />
      </AnimatedScreen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wordWrapper: {
    flexDirection: 'row'
  },
  word: {
    fontSize: 30,
    fontWeight: '800',
    color: '#fff'
  },
  propositionsWrapper: {}
});
