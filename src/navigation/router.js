import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  DestinationSearchScreen,
  GuestsScreen,
  HomeScreen,
  SearchResultPage,
} from '../screens';

const Stack = createStackNavigator();
import HomeTabNavigator from './HomeTabNavigator';

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Destination Search'}
          component={DestinationSearchScreen}
          options={{title: 'Search your destination'}}
        />
        <Stack.Screen
          name={'Guests'}
          component={GuestsScreen}
          options={{title: 'How many people'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
