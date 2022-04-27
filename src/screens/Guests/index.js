import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const GuestsScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <View>
        {/* Row 1: Adults */}
        <View style={styles.row}>
          {/* Title */}
          <View>
            <Text style={styles.title}>Adults</Text>
            <Text style={styles.subTitle}>Ages 13 or above</Text>
          </View>
          {/* Button with value */}
          <View style={styles.buttonContainer}>
            {/* - */}
            <Pressable
              style={styles.button}
              onPress={() => setAdults(Math.max(0, adults - 1))}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
            {/* value */}
            <Text>{adults}</Text>
            {/* + */}
            <Pressable
              style={styles.button}
              onPress={() => setAdults(adults + 1)}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
        </View>
        {/* Row 1: Adults End*/}

        {/* Row 2: Children */}
        <View style={styles.row}>
          {/* Title */}
          <View>
            <Text style={styles.title}>Children</Text>
            <Text style={styles.subTitle}>Ages 2 - 12</Text>
          </View>
          {/* Button with value */}
          <View style={styles.buttonContainer}>
            {/* - */}
            <Pressable
              style={styles.button}
              onPress={() => setChildren(Math.max(2, children - 1))}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
            {/* value */}
            <Text>{children}</Text>
            {/* + */}
            <Pressable
              style={styles.button}
              onPress={() => setChildren(Math.min(12, children + 1))}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
        </View>
        {/* Row 2: Children End*/}

        {/* Row 3: Infants */}
        <View style={styles.row}>
          {/* Title */}
          <View>
            <Text style={styles.title}>Infants</Text>
            <Text style={styles.subTitle}>Under 2</Text>
          </View>
          {/* Button with value */}
          <View style={styles.buttonContainer}>
            {/* - */}
            <Pressable
              style={styles.button}
              onPress={() => setInfants(Math.max(0, infants - 1))}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
            {/* value */}
            <Text>{infants}</Text>
            {/* + */}
            <Pressable
              style={styles.button}
              onPress={() => setInfants(infants + 1)}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
        </View>
        {/* Row 3: Children End*/}
      </View>

      <Pressable
        style={styles.searchButton}
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'SearchResults',
            },
          })
        }>
        <Text style={styles.searchButtonText}>Search</Text>
      </Pressable>
    </View>
  );
};

export default GuestsScreen;
