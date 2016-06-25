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
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.onPress = this.onPress.bind(this);
  }
  componentWillMount() {
    const appId = '60K8DVdGi8X9JS23P7cmkmNz-gzGzoHsz';
    const appKey = 'MFAyo235oVtSAKCksNGERQDs';
    AV.init({ appId, appKey });
  }
  onPress() {
    console.log(this.state);
    this.setState({
      password: '',
    });
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

        <Button text={'Sign In'} onPress={this.onPress} />
      </View>
    );
  }
}

export default SignIn;
