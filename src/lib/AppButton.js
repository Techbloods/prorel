import React from 'react';
import { TouchableOpacity, View, Image} from 'react-native';
import PropTypes from 'prop-types';
import AppText from './AppText';
import { THEME, WHITE } from './color';
import { sizeFromPercent } from '../utils/resize';

const styles = {
  buttonStyle: {
    flex:0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: sizeFromPercent(1.5),
    backgroundColor: THEME,
    height: 50,
  },
  buttonStyleText: {
    color: '#fff',
    fontSize: sizeFromPercent(2.2),
    textAlign: 'center',
    textAlignVertical: 'center',
  },
}

const AppButton = (props) => (
  <TouchableOpacity  onPress={props.onPress} >
    <View style={[styles.buttonStyle, props.backgroundStyle]}>
     {props.useIcon &&  
     <Image source={props.icon} style={[{height: 24, width: 24, marginRight: '5%', tintColor: WHITE}, props.iconStyle]} />
     }
      <AppText style={[styles.buttonStyleText, props.textStyle]}>{props.title}</AppText>
    </View>
  </TouchableOpacity>
)

AppButton.defaultProps = {
  backgroundStyle: {},
  onPress: () => {},
  textStyle: {},
  useIcon: false,
  icon: null,
  iconStyle: {},
}

AppButton.propTypes = {
  backgroundStyle: PropTypes.oneOfType([
    PropTypes.object, PropTypes.string,
    PropTypes.any
  ]),
  icon: PropTypes.oneOfType([
    PropTypes.object, PropTypes.string,
    PropTypes.any
  ]),
  useIcon: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  textStyle: PropTypes.oneOfType([
    PropTypes.object, PropTypes.string,
    PropTypes.any
  ]),
  iconStyle: PropTypes.oneOfType([
    PropTypes.object, PropTypes.string,
    PropTypes.any
  ]),
};

export default AppButton;