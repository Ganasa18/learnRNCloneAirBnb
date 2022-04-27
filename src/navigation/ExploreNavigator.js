import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, SearchResultPage} from '../screens';

const Stack = createStackNavigator();

const ExploreNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Welcome'}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={'SearchResults'}
        component={SearchResultPage}
        options={{
          title: 'Search your destination',
        }}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;
