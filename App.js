import React, { Component } from 'react';
import AppNavigator from './AppNavigator';
import {Provider} from 'react-redux';
import configureStore from './redux/store/storeConfiguration';

const store=configureStore();

export default class App extends Component {
  
render(){
  return(
   <Provider store={store}>
    <AppNavigator/>
  </Provider>
    );
}
}