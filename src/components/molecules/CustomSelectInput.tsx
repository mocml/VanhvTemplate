import { StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import Icon from '../atoms/Icon'
import Text from '../atoms/Text'

interface CustomSelectInputProps {
  label?: any;
  value?: string;
  placeholder?: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
}

const CustomSelectInput = ({
  label,
  value,
  placeholder = 'Chọn...',
  onPress,
  containerStyle,
  labelStyle
}: CustomSelectInputProps) => {
  return (
    <View style={styles.fullWidth}>
      {label && <Text.Label style={styles.topLabel}>{label}</Text.Label>}
      <TouchableOpacity
        style={[styles.inputWrap, containerStyle]}
        activeOpacity={0.8}
        onPress={onPress}
      >
        <Text
          style={[styles.textInput, !value && { color: Colors.placeholder }, labelStyle]}
          numberOfLines={1}
        >
          {value || placeholder}
        </Text>
        <Icon name={'menu-down'} color={Colors.text} />
      </TouchableOpacity>
    </View>
  )
}

export default CustomSelectInput

const styles = StyleSheet.create({
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 16,
    paddingHorizontal: 12,
    gap: 12,
    width: '100%',
    backgroundColor: Colors.white,
  },
  textInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
    fontWeight: '500'
  },
  topLabel: {
    marginBottom: 8,
    fontWeight: '500'
  },
  fullWidth: {
    width: '100%'
  }
})
