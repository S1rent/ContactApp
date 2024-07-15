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
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {useContactsAPI} from '../../hooks/useContactsAPI';
import {colors, Routes} from '../../constants';
import FormField from '../../components/FormField';
import MaterialCommunityIcon from '../../components/MaterialCommunityIcon';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import LoadingIndicator from '../../components/LoadingIndicator';

const DetailScreen: React.FC = () => {
  const isFocused = useIsFocused();
  const {fetchContactDetail, isLoading, deleteContact} = useContactsAPI();
  const {selectedItem, selectedItemId} = useSelector(
    (state: RootState) => state.contact,
  );
  const [imageError, setImageError] = useState(true);
  const {goBack, navigate} = useNavigation();

  const handleDelete = async () => {
    const isSuccess = await deleteContact();
    if (isSuccess) {
      goBack();
      ToastAndroid.show('Successfully delete data', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(
        'Error occured when trying to delete data',
        ToastAndroid.SHORT,
      );
    }
  };

  const handleUpdate = async () => {
    navigate(Routes.Update);
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
    if (selectedItemId || isFocused) {
      fetchContactDetail();
    }
  }, [selectedItemId, isFocused]);

  useEffect(() => {
    if (selectedItem?.photo) {
      checkImageURL(selectedItem?.photo);
    }
  }, [selectedItem?.photo]);

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={[colors.MainTheme1, colors.MainTheme2]}
      style={styles.background}>
      <ScrollView>
        {isLoading ? (
          <View style={{marginTop: 16}}>
            <LoadingIndicator />
          </View>
        ) : (
          <View style={styles.wrapperView}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              {!imageError && selectedItem?.photo !== '' ? (
                <Image
                  source={{uri: selectedItem?.photo}}
                  style={styles.imageView}
                />
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
              disabled
              label="Photo URL"
              value={selectedItem?.photo}
              placeholder="Enter photo url"
            />
            <FormField
              disabled
              label="First Name"
              value={selectedItem?.firstName}
              placeholder="Enter first name"
            />
            <FormField
              label="Last Name"
              disabled
              value={selectedItem?.lastName}
              placeholder="Enter last name"
            />
            <FormField
              label="Age"
              disabled
              keyboardType="number-pad"
              value={`${selectedItem?.age === 0 ? '' : selectedItem?.age}`}
              placeholder="Enter age"
            />

            <View
              style={[
                styles.button,
                {
                  backgroundColor: colors.YellowF68A1E,
                  marginTop: 16,
                },
              ]}>
              <TouchableOpacity onPress={handleUpdate}>
                <Text style={styles.buttonLabel}>Update</Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.button,
                {
                  backgroundColor: 'red',
                  marginTop: 0,
                },
              ]}>
              <TouchableOpacity onPress={handleDelete}>
                <Text style={styles.buttonLabel}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </LinearGradient>
  );
};

export default DetailScreen;

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
