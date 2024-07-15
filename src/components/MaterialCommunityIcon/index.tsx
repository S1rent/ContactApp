import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MaterialCommunityIcon: React.FC<{
  name: string;
  size: number;
  color: string;
}> = ({...props}) => {
  return <Icon {...props} />;
};

export default MaterialCommunityIcon;
