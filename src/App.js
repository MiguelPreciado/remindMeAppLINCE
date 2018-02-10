/**
 * RemindMe App
 * React Native Application for iOS and Android
 * @flow
 */

import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import TasksScreen from './screens/TasksScreen';


export default App = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Tasks: { screen: TasksScreen }
  },
  {
    headerMode: 'none'
  }
);
