import {View, Text, ImageBackground, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      {/* Search bar */}
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Destination Search')}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Where are you going ?</Text>
      </Pressable>

      <ImageBackground
        source={require('../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        {/* Title */}
        <Text style={styles.title}>Go Near</Text>
        {/* Button */}
        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore button clicked')}>
          <Text style={styles.buttonText}>Explore nearby place</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;