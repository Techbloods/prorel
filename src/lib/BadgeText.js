import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { sizeFromPercent } from '../utils/resize';

const BadgeText = props => (
  <View style={styles.container}>
    {props.children}
    <View style={{ display: props.badgeCount === 0 ? 'none' : 'flex' }}>
      <View style={[styles.badgeStyle, props.badgeSContainertyle]}>
        <Text style={[styles.badgeCounter, props.badgeCounterStyle]}>{props.badgeCount}</Text>
      </View>
    </View>
  </View>
);

BadgeText.defaultProps = {
  badgeSContainertyle: {},
  badgeCounterStyle: {},
};

BadgeText.propTypes = {
  badgeCount: PropTypes.number.isRequired,
  badgeSContainertyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
  badgeCounterStyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
  children: PropTypes.element.isRequired,
};

const styles = {
  container: {
    flexDirection: 'row',
  },
  badgeStyle: {
    top: -5,
    alignContent: 'center',
    alignItems: 'center',
    height: sizeFromPercent(2.6),
    width: sizeFromPercent(2.6),
    borderRadius: sizeFromPercent(1.3),
    backgroundColor: 'red',
  },
  badgeCounter: {
    color: 'white',
    height: sizeFromPercent(3.0),
    padding: '10%',
    fontSize: sizeFromPercent(1.5),
    fontWeight: 'bold',
  },
};

export default BadgeText;
