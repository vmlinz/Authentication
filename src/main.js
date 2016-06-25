import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import Signin from './components/authentication/signin';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function Main() {
  return (<View style={styles.container}>
    <Signin />
  </View>);
}

export default Main;
