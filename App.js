import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src//screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import {SCREEN} from './src/const';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={SCREEN.HOME} component={HomeScreen} />
        <Stack.Screen name={SCREEN.DETAILS} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
