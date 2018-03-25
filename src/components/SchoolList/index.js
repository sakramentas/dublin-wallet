import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Card from '../Card';

class SchoolList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredList: [{
        name: 'English School',
        logo: 'http://via.placeholder.com/50x50',
        price: '1500-3000',
        location: '1 km from spire'
      }],
    };
  }

  render() {
    const { filteredList } = this.state;
    return (
      <View>
        <View></View>
        {filteredList.map(school => (
          <Card item={school}/>
        ))}
        <View>
        </View>
      </View>
    )
  }
}

export default SchoolList;
