import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';

const Card: React.FC<{
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}> = ({children, style}) => {
  return <View style={[styles.containerView, style]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  containerView: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 8,
  },
});
