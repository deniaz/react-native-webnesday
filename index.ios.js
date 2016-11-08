/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './src/Hello';

export default class WebnesdayApp extends Component {
  render() {
    return (
      <Hello />
    );
  }
}

AppRegistry.registerComponent('WebnesdayApp', () => WebnesdayApp);
