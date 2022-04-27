import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SearchResultPage} from '../screens';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f14545',
        indicatorStyle: {
          backgroundColor: '#f14545',
        },
      }}>
      <Tab.Screen name={'list'} component={SearchResultPage} />
      <Tab.Screen name={'map'} component={SearchResultPage} />
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
