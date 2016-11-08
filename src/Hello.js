import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'World',
    };
  }

  render() {
    return(
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./logo.png')} />
        <TextInput
          style={styles.inputControl}
          placeholder="Your Name"
          onChangeText={(text) => {
            this.setState({ name: text })
          }}
        />

        <Text style={styles.output}>Hello {this.state.name}!</Text>
      </View>
    );
  }
}
