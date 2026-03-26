import { ColorValue, StyleSheet, TextInput, TextInputProps, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { Icon, Text } from '../atoms'
interface FormInputProps extends TextInputProps {
  iconName?: any,
  iconSize?: number,
  suffixIconSize?: number,
  iconColor?: ColorValue,
  suffixIconName?: any,
  suffixIconPress?: () => void,
  containerStyle?: ViewStyle,
  textInputStyle?: ViewStyle,
  color?: ColorValue,
  label?: any
}

const FormInput = ({
  iconName,
  suffixIconName,
  value,
  iconSize = 24,
  iconColor = Colors.icon,
  onChangeText,
  suffixIconPress = () => { },
  containerStyle,
  textInputStyle,
  color = Colors.white,
  suffixIconSize = NaN,
  placeholderTextColor = Colors.placeholder,
  label,
  ...props
}: FormInputProps) => {
  return (
    <View style={styles.fullWidth}>
      {label && <Text.Label style={styles.topLabel}>{label}</Text.Label>}
      <View style={[styles.inputWrap, { backgroundColor: color }, containerStyle]}>
        {iconName && <Icon name={iconName}
          size={iconSize}
          color={iconColor} />}
        <TextInput placeholder={props.placeholder}
          value={value}
          placeholderTextColor={placeholderTextColor}
          style={[styles.textInput, textInputStyle]}
          onChangeText={onChangeText}
          autoCapitalize='none'
          autoCorrect={false}
          multiline={false}
          numberOfLines={1}
          {...props}
        />
        {suffixIconName && <TouchableOpacity onPress={suffixIconPress} activeOpacity={1}>
          <Icon name={suffixIconName}
            size={suffixIconSize || iconSize}
            color={iconColor} />
        </TouchableOpacity>}
      </View>
    </View>
  )
}

export default FormInput

const styles = StyleSheet.create({
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.borderInput,
    borderRadius: 16,
    paddingHorizontal: 12,
    gap: 12,
    width: '100%',
  },
  textInput: {
    color: Colors.text,
    textAlignVertical: 'center',
    paddingVertical: 12,
    flex: 1,
    fontSize: 14,
  },
  topLabel: {
    marginBottom: 8,
    fontWeight: '500'
  },
  fullWidth: {
    width: '100%'
  }
})