import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SchoolListComponent from '../../components/SchoolList';
import { styles } from './styles';
import lang from '../../languages/pt-br';
import Hero from '../../components/Hero';

class SchoolListScene extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#ffb009',
    }
  };

  render() {
    return (
      <View style={styles.schoolList}>
        <Hero message={lang.SCHOOL_HERO_MESSAGE}/>
        <SchoolListComponent/>
      </View>
    );
  }
}

export default SchoolListScene