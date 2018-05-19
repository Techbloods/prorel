import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';


const EmptyContent = (props) => (

  <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center' }, props.backgroundStyle]}>
    <Text style={props.textStyle} >
      {props.message}
    </Text>
    {props.children}
  </View>
)
EmptyContent.defaultProps = {
  backgroundStyle: {},
  textStyle: {},
  children: <View />
}

EmptyContent.propTypes = {
  backgroundStyle: PropTypes.oneOfType([
    PropTypes.object, PropTypes.string,
    PropTypes.any
  ]),
  children: PropTypes.oneOfType([
    PropTypes.object, PropTypes.string,
    PropTypes.any
  ]),
  message: PropTypes.oneOfType([
    PropTypes.any,
  ]).isRequired,
  textStyle: PropTypes.oneOfType([
    PropTypes.object, PropTypes.string,
    PropTypes.any
  ]).isRequired,
};

export default EmptyContent;