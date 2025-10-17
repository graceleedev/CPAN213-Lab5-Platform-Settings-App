import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const AndroidButton = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  colors, 
}) => {
  const backgroundColor =
    variant === 'primary' ? colors.primary : 'transparent';
  const borderColor = variant === 'secondary' ? colors.primary : 'transparent';
  const textColor = variant === 'primary' ? '#ffffff' : colors.primary;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor, borderColor, borderWidth: variant === 'secondary' ? 1 : 0 },
        disabled && styles.disabled,
        variant === 'secondary' && colors.secondary, 
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, { color: textColor }]}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignItems: 'center',
    elevation: 2,
  },
  primary: {
    backgroundColor: '#2196F3',
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#2196F3',
    elevation: 0,
  },
  disabled: {
    backgroundColor: '#e0e0e0',
    elevation: 0,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1.25,
  },
  primaryText: {
    color: '#ffffff',
  },
  secondaryText: {
    color: '#2196F3',
  },
});
export default AndroidButton;
