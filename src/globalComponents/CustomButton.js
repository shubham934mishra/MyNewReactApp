//@flow
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../utilities/style';

export const AppButton = ({ onPress, stylee, testID, title }:
  {stylee?:Object,title:string,onPress:Function,testID:string}) => (
    <TouchableOpacity style={stylee} testID={testID} onPress={onPress}>
      <Text style={styles.submitButtonText}>{title}</Text>
    </TouchableOpacity>
  );
  
