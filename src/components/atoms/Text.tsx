import Colors from '@/constants/Colors';
import React from 'react';
import {
  ColorValue,
  Text as RNText,
  StyleSheet,
  TextProps,
} from 'react-native';

interface RNTextProps extends TextProps {
  color?: ColorValue,
  children?: any,
}
/**
 * Sử dụng cho title của item
 * 18 , 700
 */
const HeaderTitle = ({ color, children, ...props }: RNTextProps) => {
  return (
    <RNText
      {...props}
      style={[styles.defaultHeaderTitle, { color }, props?.style]}
    >
      {children}
    </RNText>
  )
}

/**
 * Sử dụng cho title của item
 * 16 , 600
 */
const Title = ({ color, children, ...props }: RNTextProps) => {
  return (
    <RNText
      {...props}
      style={[styles.defaultTitle, { color }, props?.style]}
    >
      {children}
    </RNText>
  )
}

/**
 * @description Sử dụng cho label
 * @description 14 , 500
 */
const Label = ({ color, children, ...props }: RNTextProps) => {
  return (
    <RNText
      {...props}
      style={[styles.defaultLabel, { color }, props?.style]}
    >
      {children}
    </RNText>
  )
}
/**
 * @description Sử dụng cho label bold
 * @description 14 , 700
 */
const LabelBold = ({ color, children, ...props }: RNTextProps) => {
  return (
    <RNText
      {...props}
      style={[styles.defaultLabelBold, { color }, props?.style]}
    >
      {children}
    </RNText>
  )
}

/**
 * Chữ tiny dùng cho level chip: Đánh giá mức độ
 * 12 , 400
 */
const TinyText = ({ color, children, ...props }: RNTextProps) => {
  return (
    <RNText
      {...props}
      style={[styles.defaultTinyText, { color }, props?.style]}
    >
      {children}
    </RNText>
  )
}

/**
 * Sử dụng cho các ghi chú với cỡ chữ lớn hơn
 * 14 , 400
 */
const SmallText = ({ color, children, ...props }: RNTextProps) => {
  return (
    <RNText
      {...props}
      style={[styles.defaultSmallText, { color }, props?.style]}
    >
      {children}
    </RNText>
  )
}
/**
 * Sử dụng cho giá trị gán với label
 * 16 , 400
 */
const Text = ({ color, children, ...props }: RNTextProps) => {
  return (
    <RNText
      {...props}
      style={[styles.defaultText, { color }, props?.style,]}
    >
      {children}
    </RNText>
  )
}
/**
 * Sử dụng cho giá trị gán với large
 * 24 , 400
 */
const Large = ({ color, children, ...props }: RNTextProps) => {
  return (
    <RNText
      {...props}
      style={[styles.defaultLarge, { color }, props?.style,]}
    >
      {children}
    </RNText>
  )
}

Text.Large = Large;
Text.SmallText = SmallText;
Text.TinyText = TinyText;
Text.Label = Label;
Text.LabelBold = LabelBold;
Text.Title = Title;
Text.HeaderTitle = HeaderTitle;

export default Text;

const styles = StyleSheet.create({
  defaultHeaderTitle: {
    color: Colors.text,
    fontSize: 18,
    fontWeight: '700',
  },
  defaultLabel: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: '500',
  },
  defaultLabelBold: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: '700',
  },
  defaultLarge: {
    color: Colors.text,
    fontSize: 24,
    fontWeight: '400',
  },
  defaultTinyText: {
    color: Colors.text,
    fontSize: 12,
    fontWeight: '400',
  },
  defaultTitle: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
  defaultText: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: '400',
  },
  defaultSmallText: {
    fontWeight: '400',
    color: Colors.text,
    fontSize: 14,
  },
});

// export {  TinyText, Title,HeaderTitle };
