import {View, Text, TextInput, FlatList, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import searchResults from '../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const DestinationSearchScreen = () => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* input components */}

      <View style={{height: 500}}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyBsxV7v03HQxzPDrEIHwbHskvgTM0ec8R0',
            language: 'en',
          }}
        />
      </View>

      <TextInput
        style={styles.textInput}
        placeholder="Where are you going ? "
        value={inputText}
        onChangeText={setInputText}
      />
      {/* list of destination */}
      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <Pressable
            style={styles.row}
            onPress={() => navigation.navigate('Guests')}>
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
