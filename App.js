import React from 'react';
import { Provider } from 'react-redux';
import store from './src/core/redux/store';
import RootStack from './config/routes';

const App = () =>
  <Provider store={store}>
    <RootStack />
  </Provider>;

console.disableYellowBox = true;

export default App;
