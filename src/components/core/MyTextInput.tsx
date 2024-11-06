import React, {useCallback, useEffect} from 'react';
import {useRef} from 'react';
import {
  View,
  TextInput,
  Animated,
  ViewStyle,
  TextStyle,
  KeyboardTypeOptions,
  StyleSheet,
} from 'react-native';

type MyTextInputType = {
  value?: string;
  placeholder?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  onChangedText?: (newVal: string) => void;
  keyboardType?: KeyboardTypeOptions;
  disabled?: boolean;
};

const INITIAL_VALUE = 30;
const END_VALUE = 0;

export const MyTextInput = ({
  value,
  placeholder,
  containerStyle,
  inputStyle,
  onChangedText,
  keyboardType,
  disabled,
}: MyTextInputType) => {
  const translateYAnim = useRef(
    new Animated.Value(value ? END_VALUE : INITIAL_VALUE),
  ).current;

  const animate = useCallback(() => {
    Animated.timing(translateYAnim, {
      toValue: END_VALUE,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [translateYAnim]);

  const animateReset = useCallback(() => {
    Animated.timing(translateYAnim, {
      toValue: INITIAL_VALUE,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [translateYAnim]);

  //programmticaly detect cleared value which is not firing focus/blur
  useEffect(() => {
    if (value) {
      animate();
    } else {
      animateReset();
    }
  }, [value]);

  return (
    <View style={{width: 255, ...containerStyle}}>
      <TextInput
        editable={!disabled}
        autoComplete="name"
        keyboardType={keyboardType}
        maxLength={16}
        value={value}
        onChangeText={onChangedText}
        onFocus={() => {
          animate();
        }}
        onBlur={() => {
          if (!value) {
            animateReset();
          }
        }}
        textAlignVertical="bottom"
        style={styles.input}
      />
      <Animated.View
        style={{
          ...styles.placeholder,
          transform: [{translateY: translateYAnim}],
          ...inputStyle,
        }}
        pointerEvents="none">
        <Animated.Text>{placeholder}</Animated.Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    position: 'absolute',
    paddingStart: 4,
    textAlignVertical: 'center',
  },
  input: {
    color: 'black',
    height: 55,
    bottom: -5,
    width: '100%',
    fontSize: 20,
    borderBottomColor: 'grey',
  },
});
