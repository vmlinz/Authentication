import React from 'react';
import {
  StyleSheet,
  Navigator,
} from 'react-native';
import SignIn from './components/authentication/signin';
import SignUp from './components/authentication/signup';

const routes = {
  signin: SignIn,
  signup: SignUp,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function renderScene(route, navigator) {
  let Component = routes[route.name];
  return <Component route={route} navigator={navigator} />;
}

function Main() {
  return (
    <Navigator
      sceneStyle={styles.container}
      initialRoute={{ name: 'signin' }}
      renderScene={renderScene}
    />
  );
}

export default Main;
