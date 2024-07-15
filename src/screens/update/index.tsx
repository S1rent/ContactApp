import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {useContactsAPI} from '../../hooks/useContactsAPI';
import {colors} from '../../constants';
import FormField from '../../components/FormField';
import {setEditData} from '../../redux/slices/contact/contactSlice';
import MaterialCommunityIcon from '../../components/MaterialCommunityIcon';
import {useNavigation} from '@react-navigation/native';

const UpdateScreen: React.FC = () => {
  const {editContact} = useContactsAPI();
  const dispatch = useDispatch();
  const {editData, selectedItem} = useSelector(
    (state: RootState) => state.contact,
  );
  const [imageError, setImageError] = useState(true);
  const {goBack} = useNavigation();

  const isDisabled =
    editData?.photo.trim() === '' ||
    editData?.firstName.trim() === '' ||
    editData?.lastName.trim() === '' ||
    editData?.age === 0;

  const handlePress = async () => {
    const isSuccess = await editContact(editData);
    if (isSuccess) {
      goBack();
      ToastAndroid.show('Successfully update data', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(
        'Error occured when trying to update data',
        ToastAndroid.SHORT,
      );
    }
  };

  const checkImageURL = (url: string) => {
    Image.getSize(
      url,
      () => {
        setImageError(false);
      },
      _ => {
        setImageError(true);
      },
    );
  };

  useEffect(() => {
    if (selectedItem) {
      dispatch(setEditData(selectedItem));
      checkImageURL(selectedItem?.photo);
    }
  }, [selectedItem]);

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={[colors.MainTheme1, colors.MainTheme2]}
      style={styles.background}>
      <ScrollView>
        <View style={styles.wrapperView}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            {!imageError && editData?.photo !== '' ? (
              <Image source={{uri: editData?.photo}} style={styles.imageView} />
            ) : (
              <View style={styles.imageView}>
                <MaterialCommunityIcon
                  name="account-circle"
                  size={216}
                  color={colors.Black}
                />
              </View>
            )}
          </View>
          <FormField
            label="Photo URL"
            value={editData?.photo}
            placeholder="Enter photo url"
            onChangeText={(value: string) => {
              checkImageURL(value);
              dispatch(setEditData({...editData, photo: value}));
            }}
          />
          <FormField
            label="First Name"
            value={editData?.firstName}
            placeholder="Enter first name"
            onChangeText={(value: string) => {
              dispatch(setEditData({...editData, firstName: value}));
            }}
          />
          <FormField
            label="Last Name"
            value={editData?.lastName}
            placeholder="Enter last name"
            onChangeText={(value: string) => {
              dispatch(setEditData({...editData, lastName: value}));
            }}
          />
          <FormField
            label="Age"
            keyboardType="number-pad"
            value={`${editData?.age === 0 ? '' : editData?.age}`}
            placeholder="Enter age"
            onChangeText={(value: string) => {
              const parsedValue = parseInt(value.replace(/\D/g, ''), 10);
              dispatch(
                setEditData({
                  ...editData,
                  age: isNaN(parsedValue) ? 0 : parsedValue,
                }),
              );
            }}
          />

          <View
            style={[
              styles.button,
              {
                backgroundColor: isDisabled
                  ? colors.GrayC0C1C1
                  : colors.YellowF68A1E,
              },
            ]}>
            <TouchableOpacity disabled={isDisabled} onPress={handlePress}>
              <Text style={styles.buttonLabel}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default UpdateScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  imageView: {
    width: 216,
    height: 216,
    borderRadius: 200,
    resizeMode: 'cover',
    marginRight: 8,
  },
  wrapperView: {marginTop: 32, paddingBottom: 32},
  button: {
    height: 48,
    borderRadius: 8,
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 8,
    flex: 1,
  },
  buttonLabel: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.White,
  },
});
