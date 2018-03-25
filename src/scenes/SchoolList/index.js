import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

class SchoolList extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>School List</Text>
      </View>
    );
  }
}

export default StackNavigator({
  Home: {
    screen: SchoolList,
  },
});