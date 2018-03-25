import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SchoolListComponent from '../../components/SchoolList';

class SchoolList extends Component {
  render() {
    return (
      <View style={{ flex: 1, height: 100, alignItems: 'center', justifyContent: 'center' }}>
        <SchoolListComponent/>
      </View>
    );
  }
}

export default SchoolList