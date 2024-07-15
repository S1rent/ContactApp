import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {SafeAreaView, Text} from 'react-native';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Text>Welcome to React Native with TypeScript and Redux!</Text>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
