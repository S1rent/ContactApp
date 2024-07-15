import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcon from '../../../components/MaterialCommunityIcon';
import {colors} from '../../../constants';
import {useDispatch} from 'react-redux';
import {setSearchKey} from '../../../redux/slices/contact/contactSlice';

const HomeSearchBox: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(setSearchKey(searchText));
  };

  return (
    <View style={styles.wrapperView}>
      <View style={[styles.containerView, styles.searchBox]}>
        <TextInput
          placeholderTextColor={colors.GrayC0C1C1}
          style={styles.searchBar}
          value={searchText}
          placeholder="Search a contact..."
          onChangeText={(value: string) => {
            setSearchText(value.trim());
          }}
        />
      </View>
      <TouchableOpacity onPress={handlePress}>
        <View style={[styles.containerView, styles.searchButton]}>
          <MaterialCommunityIcon
            name="magnify"
            size={24}
            color={colors.Black}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeSearchBox;

const styles = StyleSheet.create({
  wrapperView: {
    flex: 1,
    flexDirection: 'row',
  },
  containerView: {
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 16,
    margin: 16,
    marginTop: 0,
    shadowColor: '#000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 8,
  },
  searchBox: {
    flex: 1,
    height: 48,
    padding: 4,
  },
  searchButton: {
    width: 48,
    height: 48,
    marginLeft: 0,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    width: '100%',
    height: 40,
    marginVertical: 0,
    marginHorizontal: 8,
    color: colors.Black,
    tintColor: colors.Black,
  },
});
