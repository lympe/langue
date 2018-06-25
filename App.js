import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';

import Nav from './src/screens/Nav';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA92JtcSZDjVhK0y2hbkjirb-YBI1EeC9E',
      authDomain: 'learn-language-b26fb.firebaseapp.com',
      databaseURL: 'https://learn-language-b26fb.firebaseio.com',
      projectId: 'learn-language-b26fb',
      storageBucket: 'learn-language-b26fb.appspot.com',
      messagingSenderId: '598467138692'
    });
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Nav />
      </Provider>
    );
  }
}
