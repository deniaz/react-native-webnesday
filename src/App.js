import React from 'react';
import {
  Button,
  ListView,
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);
    this.onEndReached = this.onEndReached.bind(this);

    this.state = {
      nextUrl: null,
      characters: [],
      data: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
    };
  }

  componentDidMount() {
    this.fetchData('https://swapi.co/api/people/');
  }

  onEndReached() {
    const { nextUrl } = this.state;

    if (nextUrl) {
      this.fetchData(
        nextUrl.includes('http://') ? nextUrl.replace('http:', 'https:') : nextUrl
      );
    }
  }

  fetchData(url) {
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((json) => {
        const characters = this.state.characters.concat(json.results);
        this.setState({
          characters,
          nextUrl: json.next,
          data: this.state.data.cloneWithRows(characters),
        });
      })
      .catch((error) => console.error(error));
  }

  renderRow(row) {
    return (
      <TouchableHighlight onPress={() => {}}>
        <View style={ styles.row }>
          <Text style={ styles.headline }>{row.name}</Text>
          <Text style={ styles.text }>Height: {row.height}, Mass: {row.mass}, Eye Colour: {row.eye_color}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  renderSeparator(section, row) {
    return <View key={row} style={styles.separator} />;
  }

  renderCharacters() {
    const { data } = this.state;

    return (
      <ListView
        dataSource={data}
        renderRow={this.renderRow}
        renderSeparator={this.renderSeparator}
        onEndReached={this.onEndReached}
      />
    );
  }

  renderLoading() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.loading }>Loading...</Text>
      </View>
    );
  }

  render() {
    const { characters } = this.state;

    return (
      <View style={{ flex: 1, paddingTop: 20, }}>
        {characters.length > 0 ? this.renderCharacters() : this.renderLoading()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEFEFE',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    color: '#999999',
    textAlign: 'center',
  },
  row: {
     flexDirection: 'column',
     justifyContent: 'center',
     padding: 20,
     backgroundColor: '#F6F6F6',
   },
  headline: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333'
  },
  text: {
    flex: 1,
    fontSize: 14,
    color: '#666666'
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});
