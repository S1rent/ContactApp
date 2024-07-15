import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, Routes} from '../../../constants';
import MaterialCommunityIcon from '../../../components/MaterialCommunityIcon';
import {useNavigation} from '@react-navigation/native';

const HomeActionButton: React.FC = () => {
  const {navigate} = useNavigation();
  const handleNavigate = () => {
    navigate(Routes.Create);
  };
  return (
    <View style={styles.containerView}>
      <TouchableOpacity onPress={handleNavigate}>
        <MaterialCommunityIcon
          name="plus"
          color={colors.MainTheme1}
          size={32}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeActionButton;

const styles = StyleSheet.create({
  containerView: {
    width: 56,
    height: 56,
    position: 'absolute',
    bottom: 24,
    right: 24,
    backgroundColor: colors.White,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    borderWidth: 1,
  },
});
