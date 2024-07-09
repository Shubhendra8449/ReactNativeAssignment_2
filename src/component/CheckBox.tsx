import React from 'react';
import { TouchableOpacity, View, StyleSheet, Image } from 'react-native';

const CustomCheckbox = ({ value, onValueChange }) => {

    const checkImage=require('../component/assests/check-box.png')
    const unCheckImage=require('../component/assests/unchecked.png')

    const styles = StyleSheet.create({
        checkboxContainer: {
          width: 17,
          height: 17,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 18,
          left: 18,
        
          backgroundColor:'white'
        },
      });
  return (
    <TouchableOpacity onPress={onValueChange} style={styles.checkboxContainer}>
      <Image source={(value?checkImage:unCheckImage)} />
    </TouchableOpacity>
  );
};



export default CustomCheckbox;
