import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SchoolListComponent from '../../components/SchoolList';
import { styles } from './styles';

class SchoolList extends Component {
  render() {
    return (
      <View style={styles.schoolList}>
        <View>
          {/*<Search/>*/}
        </View>
        <SchoolListComponent/>
      </View>
    );
  }
}

export default SchoolList