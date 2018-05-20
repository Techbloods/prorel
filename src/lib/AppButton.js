import React from 'react';
import { TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import AppText from './AppText';

const styles = {
  buttonStyle: {
    flex:0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'purple',
    marginTop: 'auto',
    marginBottom: 'auto',
    height: 40,
  },
  buttonStyleText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    paddingLeft: 7,
    paddingRight: 7,
    textAlignVertical: 'center',
  },
}

const AppButton = (props) => (
  <TouchableOpacity  onPress={props.onPress} >
    <View style={[styles.buttonStyle, props.backgroundStyle]}>
      <AppText style={[styles.buttonStyleText, props.textStyle]}>{props.title}</AppText>
    </View>
  </TouchableOpacity>
)

AppButton.defaultProps = {
  backgroundStyle: {},
  onPress: () => {},
  textStyle: {},
}

AppButton.propTypes = {
  backgroundStyle: PropTypes.oneOfType([
    PropTypes.object, PropTypes.string,
    PropTypes.any
  ]),
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  textStyle: PropTypes.oneOfType([
    PropTypes.object, PropTypes.string,
    PropTypes.any
  ]),
};

export default AppButton;