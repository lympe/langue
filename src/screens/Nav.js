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
import { connect } from 'react-redux';
import * as actions from '../actions';

class Nav extends Component {
  _renderContent() {
    if (this.props.view === 'List') return <List />;
    if (this.props.view === 'Login') return <Login />;
    if (this.props.view === 'Shop') return <Shop />;
    if (this.props.view === 'Duel') return <Duel />;
    if (this.props.view === 'Chat') return <Chat />;
  }
  _renderSettings() {
    if (this.props.view === 'Settings') {
      return <Settings />;
    }
    if (this.props.view === 'Game') {
      return <Game />;
    } else {
      return (
        <View style={{ flex: 1 }}>
          {this._renderContent()}
          <Footer />
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
    paddingTop: Platform.OS === 'ios' ? 30 : 25
  }
});

function mapStateToProps({ nav }) {
  const { view } = nav;
  return {
    view
  };
}

export default connect(mapStateToProps, actions)(Nav);
