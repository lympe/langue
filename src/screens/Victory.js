import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import Btn from '../components/Btn';
import Header from '../components/Header';
import AnimatedScreen from '../components/AnimatedScreen';
import { connect } from 'react-redux';
import * as actions from '../actions';

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

class Victory extends Component {
  render() {
    return (
      <AnimatedScreen from="top" duration={150} style={styles.container}>
        <Header back={true} />
        <View style={{ flex: 1 }}>
          <Text>{this.props.wordsKnown / this.props.list.length * 100}%</Text>
        </View>
      </AnimatedScreen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800'
  },
  titleWrapper: {
    borderBottomWidth: 3,
    borderBottomColor: 'yellow',
    width: WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10
  }
});

function mapStateToProps({ game, settings }) {
  const {
    heart,
    list,
    letters,
    letterNumber,
    wordNumber,
    propositions,
    prop,
    wordsKnown
  } = game;
  const { lang, langLearn } = settings;
  return {
    heart,
    list,
    letters,
    letterNumber,
    wordNumber,
    propositions,
    lang,
    langLearn,
    prop,
    wordsKnown
  };
}

export default connect(mapStateToProps, actions)(Victory);
