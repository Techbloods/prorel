import React from 'react';
import { Text} from 'react-native';
import PropTypes from 'prop-types';


const AppText = (props) => (
  <Text
    style={props.style}
    numberOfLines={1}
    ellipsizeMode="tail"
  >
    {props.children}
  </Text>
)

AppText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.any,
  ]).isRequired,
  style: PropTypes.oneOfType([
    PropTypes.object, PropTypes.string,
    PropTypes.any
  ]).isRequired,
};

export default AppText;