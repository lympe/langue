import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Animated
} from 'react-native';
import Btn from '../components/Btn';
import Button from '../components/Button';
import Header from '../components/Header';
import Letter from '../components/Letter';
import AnimatedScreen from '../components/AnimatedScreen';
import { connect } from 'react-redux';
import * as actions from '../actions';

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: new Animated.Value(1),
      translateX: new Animated.Value(0),
      opacity: new Animated.Value(1)
    };
  }
  _renderWord() {
    return this.props.list[this.props.wordNumber][this.props.lang]
      .split('')
      .map((item, i) => {
        var key = Math.random();
        return (
          <Letter key={'letter' + Math.random()} text={item} ind={i + 1} />
        );
      });
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.letters.length - 1 ===
      this.props.list[this.props.wordNumber][this.props.lang].length
    ) {
      if (
        nextProps.letters.join('') ===
        this.props.list[this.props.wordNumber][this.props.lang]
      ) {
        this.props.nextWord(
          this.props.wordNumber,
          this.props.list,
          this.props.lang
        );
        this._nextWord();
      } else {
        this.props.looseHeart(this.props.heart);
        this._vibrate();
      }
    }
  }
  _nextWord() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(this.state.opacity, {
          toValue: 0,
          duration: 250
        }),
        Animated.timing(this.state.translateX, {
          toValue: -WIDTH,
          duration: 250
        })
      ]),
      Animated.timing(this.state.translateX, {
        toValue: WIDTH,
        duration: 0
      }),
      Animated.parallel([
        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 250,
          delay: 60
        }),
        Animated.timing(this.state.translateX, {
          toValue: 0,
          duration: 250,
          delay: 60
        })
      ])
    ]).start();
  }
  _vibrate() {
    Animated.sequence([
      Animated.timing(this.state.scale, {
        toValue: 0.8,
        duration: 200
      }),
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 200
      })
    ]).start();
  }
  _renderPropositions() {
    return this.props.propositions.map((item, i) => {
      return (
        <Button
          ind={i}
          onClick={letter => this.onClick(letter)}
          sideColor="#c57403"
          bgColor="#ff9501"
          text={item}
        />
      );
    });
  }
  onClick(letter) {
    this.props.addLetter(
      this.props.letterNumber,
      letter,
      this.props.letters,
      this.props.wordNumber,
      this.props.list
    );
  }
  _renderHeart() {
    return (
      <View style={styles.heartWrapper}>
        <Image
          style={[
            styles.heartImg,
            this.props.heart > 2 ? '' : { opacity: 0.3 }
          ]}
          source={require('../../img/heart.png')}
        />
        <Image
          style={[
            styles.heartImg,
            this.props.heart > 1 ? '' : { opacity: 0.3 }
          ]}
          source={require('../../img/heart.png')}
        />
        <Image
          style={[
            styles.heartImg,
            this.props.heart > 0 ? '' : { opacity: 0.3 }
          ]}
          source={require('../../img/heart.png')}
        />
      </View>
    );
  }
  render() {
    const container = {
      transform: [{ scale: this.state.scale }],
      flex: 1
    };
    const wrapper = {
      transform: [{ translateX: this.state.translateX }],
      opacity: this.state.opacity,
      flex: 1
    };
    return (
      <AnimatedScreen from="bottom" duration={150} style={styles.container}>
        <Animated.View style={container}>
          <View style={styles.gameHeader}>
            <Text style={styles.text}>
              {this.props.wordNumber}/{this.props.list.length}
            </Text>
            {this._renderHeart()}
          </View>
          <Animated.View style={wrapper}>
            <View style={styles.wrapper}>
              <Text style={styles.word}>
                {this.props.list[this.props.wordNumber][this.props.langLearn]}
              </Text>
              <View style={styles.wordWrapper}>{this._renderWord()}</View>
            </View>
            <View style={styles.propositionsWrapper}>
              {this._renderPropositions()}
            </View>
          </Animated.View>
        </Animated.View>
      </AnimatedScreen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wordWrapper: {
    flexDirection: 'row'
  },
  word: {
    fontSize: 30,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center'
  },
  propositionsWrapper: {
    flex: 1,
    flexDirection: 'row',
    width: WIDTH,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heartImg: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginLeft: 5
  },
  gameHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: WIDTH,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20
  },
  heartWrapper: {
    flexDirection: 'row'
  },
  text: {
    fontSize: 20,
    fontWeight: '800',
    color: '#fff'
  },
  btn: {
    width: 50,
    height: 80
  }
});

function mapStateToProps({ game, settings }) {
  const { heart, list, letters, letterNumber, wordNumber, propositions } = game;
  const { lang, langLearn } = settings;
  return {
    heart,
    list,
    letters,
    letterNumber,
    wordNumber,
    propositions,
    lang,
    langLearn
  };
}

export default connect(mapStateToProps, actions)(Game);
