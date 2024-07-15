import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {IContactData} from '../../../redux/slices/contact/types';
import Card from '../../../components/Card';
import {colors, Routes} from '../../../constants';
import MaterialCommunityIcon from '../../../components/MaterialCommunityIcon';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setSelectedItemId} from '../../../redux/slices/contact/contactSlice';

const HomeContactListItem: React.FC<{
  data: IContactData;
}> = ({data}) => {
  const [imageError, setImageError] = useState(false);
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  Image.getSize(
    data.photo,
    () => {
      setImageError(false);
    },
    _ => {
      setImageError(true);
    },
  );

  const name = `${data.firstName} ${data.lastName}`;

  const handleNavigate = () => {
    dispatch(setSelectedItemId(data?.id));
    navigate(Routes.Detail);
  };

  return (
    <Card style={styles.wrapperView}>
      <TouchableOpacity onPress={handleNavigate}>
        <View style={styles.containerView}>
          <View>
            {!imageError ? (
              <Image source={{uri: data.photo}} style={styles.imageView} />
            ) : (
              <View style={styles.imageView}>
                <MaterialCommunityIcon
                  name="account-circle"
                  size={64}
                  color={colors.Black}
                />
              </View>
            )}
          </View>

          <View>
            <Text style={styles.nameLabel}>{name}</Text>
            <Text style={styles.ageLabel}>{data.age ?? 0} years old</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export default HomeContactListItem;

const styles = StyleSheet.create({
  wrapperView: {
    marginVertical: 8,
  },
  containerView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameLabel: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.Black,
  },
  ageLabel: {fontWeight: '400', fontSize: 16, color: colors.GrayC0C1C1},
  imageView: {
    width: 64,
    height: 64,
    borderRadius: 100,
    resizeMode: 'cover',
    marginRight: 8,
  },
});
