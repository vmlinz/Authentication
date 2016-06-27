import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import AV from 'avoscloud-sdk';
import Button from '../common/button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
  },
});

class Tweets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    this.onPressLogin = this.onPressLogin.bind(this);
    this.onPressLogout = this.onPressLogout.bind(this);
  }
  componentWillMount() {
    AV.User.currentAsync()
    .then((user) => {
      this.setState({ user });
    }, (error) => {
      console.log(error.message);
    });
  }
  onPressLogout() {
    AV.User.logOut();
    this.setState({ user: null });
  }
  onPressLogin() {
    const navigator = this.props.navigator;
    navigator.resetTo({ name: 'signin' });
  }
  render() {
    const user = this.state.user;
    if (user) {
      return (
        <View style={styles.container}>
          <Text style={styles.label}>Tweets for {user.getUsername()}</Text>
          <Button text={'Sign Out'} onPress={this.onPressLogout} />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Login to see tweets.</Text>
        <Button text={'Sign In'} onPress={this.onPressLogin} />
      </View>
    );
  }
}

Tweets.propTypes = {
  user: React.PropTypes.object,
  navigator: React.PropTypes.object,
};

export default Tweets;
