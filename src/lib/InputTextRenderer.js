import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  Image
} from 'react-native';
import AppText from './AppText';
import { WHITE } from './color';

const styles = {
  borderBox: {
    height: 50,
    borderRadius: 5,
    borderWidth: 0.6,
    borderColor: 'grey',
  },
  searchfield: {
    color: 'black',
    fontSize: 18,
  },

}

const InputTextRenderer = (props) => (
  <View style={props.componentStyle}>
    <AppText style={[props.textStyle,  {marginBottom: 4}]}> {props.title}</AppText>
    <View style={[styles.borderBox]} >
    {props.useIcon &&  
     <Image source={props.icon} style={[{height: 24, width: 24, marginRight: '5%', tintColor: WHITE}, props.iconStyle]} />
     }
    <TextInput
      style={[{height: '100%', width: '100%', fontSize: 16, textAlignVertical: 'center', textAlign: 'center'}, props.textInputStyle]}
      value={props.inputTextValue}
      keyboardType={props.keyboardType}
      placeholder={props.placeholder}
      placeholderTextColor={props.placeholderTextColor}
      onChangeText={input => props.onChangeText( input )}
      underlineColorAndroid="transparent"
    />
    </View>
  </View>
);

InputTextRenderer.default = {
  keyboardType: 'all',
  onChangeText: () => {},
  textStyle: {},
  inputTextValue: '',
  title: '',
  placeholder: '',
  textInputStyle: {},
  placeholderTextColor: "grey",
  icon: null,
  useIcon: false,
  iconStyle: {},
}

InputTextRenderer.propTypes = {
  keyboardType: PropTypes.oneOfType([
    PropTypes.any,
  ]),
  onChangeText: PropTypes.func.isRequired,
  componentStyle: PropTypes.oneOfType([
    PropTypes.any,
  ]),
  useIcon: PropTypes.bool,
  textStyle: PropTypes.oneOfType([
    PropTypes.any,
  ]),
  iconStyle: PropTypes.oneOfType([
    PropTypes.any,
  ]),
  icon: PropTypes.oneOfType([
    PropTypes.any,
  ]),
  inputTextValue: PropTypes.string,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  textInputStyle: PropTypes.oneOfType([
    PropTypes.any,
  ]),
  placeholderTextColor: PropTypes.oneOfType([
    PropTypes.any,
  ]),
};

export default InputTextRenderer;