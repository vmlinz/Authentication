import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import Button from '../common/button';
import AV from 'avoscloud-sdk';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center',
  },
  label: {
    fontSize: 18,
  },
  errorMessage: {
    color: 'red',
  },
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMessage: '',
    };
    this.onPress = this.onPress.bind(this);
    this.onPressSignUp = this.onPressSignUp.bind(this);
  }

  componentWillMount() {
    const appId = '60K8DVdGi8X9JS23P7cmkmNz-gzGzoHsz';
    const appKey = 'MFAyo235oVtSAKCksNGERQDs';
    AV.init({ appId, appKey });
  }

  onPress() {
    AV.User.logIn(this.state.username, this.state.password)
    .then((user) => { console.log(user); },
      (error) => { this.setState({ errorMessage: error.message }); });
  }

  onPressSignUp() {
    const navigator = this.props.navigator;
    navigator.push({ name: 'signup' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign In</Text>

        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={this.state.username}
          onChangeText={(text) => this.setState({ username: text })}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={[styles.input]}
          secureTextEntry
          value={this.state.password}
          onChangeText={(text) => this.setState({ password: text })}
        />

        <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
        <Button text={'Sign In'} onPress={this.onPress} />

        <Button text={'Register a new account'} onPress={this.onPressSignUp} />
      </View>
    );
  }
}

SignIn.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};

export default SignIn;
