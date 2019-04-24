/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './src/Components/Header'
import AlbumList from './src/Components/AlbumLIst';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header headertext={'Albums'} />
        <AlbumList />

      </View>
    );
  }
}

