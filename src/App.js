import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Router from '../config/routes';
import reducers from './src/redux/reducers';

const logger = createLogger();
const middleware = applyMiddleware(thunk);
const store = createStore(reducers, {}, middleware);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Test!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
      </Provider>
    );
  }
}

console.disableYellowBox = true;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
