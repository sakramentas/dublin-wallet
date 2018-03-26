import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const Hero = ({ message }) =>
  (<View style={styles.hero}>
    <Text style={styles.heroText}>{message}</Text>
   </View>);

export default Hero;
