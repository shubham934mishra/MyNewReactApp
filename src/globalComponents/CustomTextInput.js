//@flow
import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from '../utilities/style';
import COLORS from "../utilities/Colors";

export const CustomTextInput = ({ label, ipOnChangeText, testID }:
    {label:string,ipOnChangeText:Function,testID:string}) => (
    <View style={styles.inputView}>
        <TextInput
            testID={testID}
            placeholder={label}
            placeholderTextColor={COLORS.placeholderColor}
            onChangeText={ipOnChangeText}
        />
    </View>
);
