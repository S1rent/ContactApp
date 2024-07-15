import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import Card from '../Card';
import {colors} from '../../constants';

const FormField: React.FC<{
  placeholder: string;
  value?: string;
  label: string;
  keyboardType?: KeyboardTypeOptions;
  onChangeText?: (value: string) => void;
  disabled?: boolean;
}> = ({
  value,
  placeholder,
  onChangeText,
  label,
  keyboardType,
  disabled = false,
}) => {
  return (
    <View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <Card>
        <TextInput
          editable={!disabled}
          keyboardType={keyboardType}
          placeholderTextColor={colors.GrayC0C1C1}
          style={styles.searchBar}
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
      </Card>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  searchBar: {
    width: '100%',
    height: 24,
    marginVertical: 0,
    marginHorizontal: 8,
    color: colors.Black,
    tintColor: colors.Black,
    padding: 0,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.White,
  },
  labelContainer: {
    marginHorizontal: 16,
    marginBottom: 0,
  },
});
