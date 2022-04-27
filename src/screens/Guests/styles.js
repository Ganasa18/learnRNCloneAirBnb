import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  page: {
    justifyContent: 'space-between',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  title: {
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#8d8d8d',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    marginHorizontal: 15,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#474747',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 20,
    color: '#474747',
  },

  searchButton: {
    marginBottom: 20,
    backgroundColor: '#f15454',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginHorizontal: 20,
    borderRadius: 10,
  },

  searchButtonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
