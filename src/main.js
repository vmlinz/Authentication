import React from 'react';
import {
  StyleSheet,
  Navigator,
} from 'react-native';
import SignIn from './components/authentication/signin';
import SignUp from './components/authentication/signup';
import Tweets from './components/tweets/tweets';
import AV from 'avoscloud-sdk';

const routes = {
  signin: SignIn,
  signup: SignUp,
  tweets: Tweets,
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

class Main extends React.Component {
  componentWillMount() {
    const appId = '60K8DVdGi8X9JS23P7cmkmNz-gzGzoHsz';
    const appKey = 'MFAyo235oVtSAKCksNGERQDs';
    AV.init({ appId, appKey });
  }

  render() {
    return (
      <Navigator
        sceneStyle={styles.container}
        initialRoute={{ name: 'tweets' }}
        renderScene={renderScene}
      />
    );
  }
}

export default Main;
