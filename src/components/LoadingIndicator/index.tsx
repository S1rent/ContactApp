import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants';

const LoadingIndicator: React.FC = () => {
  return (
    <View style={styles.activityIndicator}>
      <ActivityIndicator size="large" color={colors.White} />
    </View>
  );
};

export default LoadingIndicator;

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
