import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';

const Card = ({ item }) =>
  <View style={styles.card}>
    <Image source={{ uri: item.logo }} style={styles.logo} />
    <Text>{item.name}</Text>
    <Text>{item.price}</Text>
    <Text>{item.location}</Text>
  </View>;

export default Card;
