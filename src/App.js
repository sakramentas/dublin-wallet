import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
// import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Router from '../config/routes';
import reducers from './core/redux/reducers';
import lang from './languages/pt-br';

// const logger = createLogger();
const middleware = applyMiddleware(thunk);
const store = createStore(reducers, {}, middleware);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>{lang.SCHOOL_HERO_MESSAGE}</Text>
        </View>
      </Provider>
    );
  }
}

console.disableYellowBox = true;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb009',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
