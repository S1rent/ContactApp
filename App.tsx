import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';
import {Routes} from './src/constants';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen name={Routes.Home} component={HomeScreen} />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
