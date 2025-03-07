import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';
import {Routes} from './src/constants';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CreateScreen from './src/screens/create';
import DetailScreen from './src/screens/detail';
import UpdateScreen from './src/screens/update';
import SplashScreen from 'react-native-splash-screen';

const App: React.FC = () => {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen
              name={Routes.Home}
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={Routes.Create}
              component={CreateScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={Routes.Detail}
              component={DetailScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={Routes.Update}
              component={UpdateScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
