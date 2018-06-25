import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import List from './List';
import Game from './Game';
import Settings from './Settings';
import Footer from '../components/Footer';
import Login from './Login';
import Duel from './Duel';
import Shop from './Shop';
import Chat from './Chat';
import Victory from './Victory';
import { connect } from 'react-redux';
import * as actions from '../actions';
import WonHeartPop from '../pops/WonHeartPop';

class Nav extends Component {
  _renderContent() {
    if (this.props.view === 'List') return <List />;
    if (this.props.view === 'Login') return <Login />;
    if (this.props.view === 'Shop') return <Shop />;
    if (this.props.view === 'Duel') return <Duel />;
    if (this.props.view === 'Chat') return <Chat />;
    if (this.props.view === 'Victory') return <Victory />;
  }
  _renderPop() {
    if (this.props.pops === 'WonHeartPop') return <WonHeartPop />;
  }
  _renderPops() {
    if (this.props.pops) {
      return <View style={styles.popWrapper}>{this._renderPop()}</View>;
    }
  }
  _renderSettings() {
    if (this.props.view === 'Settings') {
      return <Settings />;
    }
    if (this.props.view === 'Game') {
      return <Game />;
    }
    if (this.props.view === 'Victory') {
      return <Victory />;
    } else {
      return (
        <View style={{ flex: 1 }}>
          {this._renderContent()}
          <Footer />
          {this._renderPops()}
        </View>
      );
    }
  }
  render() {
    return <View style={styles.container}>{this._renderSettings()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5270FF',
    paddingTop: Platform.OS === 'ios' ? 30 : 0
  },
  popWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'rgba(25,25,25,0.3)',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

function mapStateToProps({ nav }) {
  const { view } = nav;
  return {
    view
  };
}

export default connect(mapStateToProps, actions)(Nav);
