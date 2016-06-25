import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    borderColor: 'black',
    marginTop: 10,
  },
  text: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 18,
  },
});

function Button(props) {
  return (
    <TouchableHighlight
      style={styles.button}
      underlayColor={'gray'}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.text}</Text>
    </TouchableHighlight>
  );
}

Button.propTypes = {
  text: React.PropTypes.string,
  onPress: React.PropTypes.func.isRequired,
};

export default Button;
