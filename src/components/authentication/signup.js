// @flow
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import Button from '../common/button';
import AV from 'avoscloud-sdk';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
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
  errorMessage: {
    color: 'red',
  },
});

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordConfirmation: '',
      errorMessage: '',
    };

    this.onPressSignUp = this.onPressSignUp.bind(this);
    this.onPressSignIn = this.onPressSignIn.bind(this);
  }

  async onPressSignUp() {
    const username = this.state.username;
    const password = this.state.password;
    const passwordConfirmation = this.state.passwordConfirmation;

    if (password === passwordConfirmation) {
      let user = new AV.User();
      user.setUsername(username);
      user.setPassword(password);
      user.setEmail(`${username}@test.com`);
      try {
        // async wait user signup and log in
        user = await user.signUp();
        // get navigator
        const navigator = this.props.navigator;
        // navigate to 'tweets' and reset the stack
        navigator.resetTo({ name: 'tweets' });
      } catch (error) {
        this.setState({ errorMessage: error.message });
      }
    } else {
      this.setState({ errorMessage: 'password and confirmation don\'t match.' });
    }
  }

  onPressSignIn() {
    const navigator = this.props.navigator;
    navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Signup</Text>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={this.state.username}
          onChangeText={(text) => this.setState({ username: text })}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={this.state.password}
          onChangeText={(text) => this.setState({ password: text })}
        />
        <Text style={styles.label}>Confirm password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={this.state.passwordConfirmation}
          onChangeText={(text) => this.setState({ passwordConfirmation: text })}
        />

        <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
        <Button
          text={'Sign Up'}
          onPress={this.onPressSignUp}
        />
        <Button
          text={'I have an account...'}
          onPress={this.onPressSignIn}
        />
      </View>
    );
  }
}

SignUp.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};

export default SignUp;
