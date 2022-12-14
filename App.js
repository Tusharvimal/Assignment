import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar
} from 'react-native';
import Navigation from './Navigation';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#DB504A" animated={true} />
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
