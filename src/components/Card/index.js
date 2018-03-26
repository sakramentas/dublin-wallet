import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Card = ({ item }) =>
  (<View style={styles.card}>
    <TouchableOpacity onPress={() => this.props.navigation.navigate('SchoolPageScene')}>
      <Image source={{ uri: item.logo }} style={styles.logo} />
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <Text>{item.location}</Text>
    </TouchableOpacity>
   </View>);

export default Card;
