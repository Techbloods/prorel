import React from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { Container, StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import platformTheme from '../../native-base-theme/variables/platform';

const TabContainer = props => (
  <StyleProvider style={getTheme(platformTheme)}>
    <Container>
      <StatusBar animated backgroundColor={'grey'} barStyle="default" />
      {props.children}
    </Container>
  </StyleProvider>
);

TabContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.array,
  ]).isRequired,
};

export default TabContainer;
