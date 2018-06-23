import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  Text,
  Animated,
  Image
} from 'react-native';
import * as actions from '../actions';
import { connect } from 'react-redux';

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

class Btn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ind: 0,
      known: 0,
      continue: true,
      translateY: new Animated.Value(-10),
      scale: new Animated.Value(this.props.animate === false ? 1 : 0)
    };
  }
  componentDidMount() {
    Animated.timing(this.state.scale, {
      toValue: 1,
      duration: 350,
      delay: this.props.delay
    }).start();
  }
  _pressBtn() {
    Animated.spring(this.state.translateY, {
      toValue: 0,
      duration: 350,
      bounciness: 20
    }).start();
  }
  _unPressBtn() {
    Animated.spring(this.state.translateY, {
      toValue: -10,
      duration: 350,
      bounciness: 20
    }).start();
  }
  _onClick() {
    if (this.props.to) {
      this.props.navigate(this.props.to);
    } else {
      this.props.onPress();
    }
  }
  _renderContent() {
    if (this.props.children) {
      returnthis.props.children;
    }
    if (this.props.text) {
      const textStyle = {
        fontSize: this.props.fontSize
      };
      return <Text style={styles.text}>{this.props.text}</Text>;
    } else {
      return (
        <Image
          style={[styles.img, this.props.imgSize]}
          source={this.props.src}
        />
      );
    }
  }
  render() {
    const container = {
      backgroundColor: this.props.sideColor,
      transform: [{ scale: this.state.scale }],
      borderRadius: this.props.radius
    };
    const wrapper = {
      backgroundColor: this.props.bgColor,
      transform: [
        { scale: this.state.scale },
        { translateY: this.state.translateY }
      ],
      borderRadius: this.props.radius
    };
    return (
      <TouchableWithoutFeedback
        onPressIn={() => this._pressBtn()}
        onPressOut={() => this._unPressBtn()}
        onPress={() => this._onClick()}
      >
        <Animated.View
          style={[
            styles.container,
            container,
            this.props.margin,
            this.props.btnSize
          ]}
        >
          <Animated.View style={[styles.wrapper, wrapper, this.props.btnSize]}>
            {this._renderContent()}
          </Animated.View>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800'
  },
  img: {
    height: 50,
    width: 50,
    resizeMode: 'contain'
  }
});

export default connect(null, actions)(Btn);
