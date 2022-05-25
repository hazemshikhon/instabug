import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import ListMovies from './App/screens/ListMovies';

const App = () => {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <ListMovies />
    </NavigationContainer>
    // </Provider>
  );
};

export default App;
