/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import Router from './src/navigation/router';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Router />
    </>
  );
};

export default App;
