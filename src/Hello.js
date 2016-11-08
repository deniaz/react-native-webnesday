import React from 'react';
import { Image, View, StyleSheet, Text, TextInput } from 'react-native';

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
    };
  }

  render() {
    return(
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./logo.png')} />
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          onChangeText={(text) => {
            this.setState({ name: text })
          }}
        />

        <Text style={styles.output}>Hello {this.state.name ? this.state.name : 'World'}!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e324b'
  },
  logo: {
    width: 178,
    height: 35
  },
  input: {
    backgroundColor: '#ffffff',
    color: '#009fe3',
    borderWidth: 1,
    height: 40,
    margin: 20,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  output: {
    color: '#ffffff',
  }
});
