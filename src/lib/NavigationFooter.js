import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Footer, FooterTab, Button, StyleProvider, Text } from 'native-base';
import PropTypes from 'prop-types';
import getTheme from '../../native-base-theme/components';
import platformTheme from '../../native-base-theme/variables/platform';
import BadgeText from './BadgeText';
import { sizeFromPercent } from '../utils/resize';

const NavigationFooter = props => (
  <StyleProvider style={getTheme(platformTheme)}>
    <Footer>
      <FooterTab>
        <Button
          vertical
          // active={props.navigationState.index === 0}
          onPress={() => {}}
        >
          <Icon path={''} />
          <Text uppercase={false}>Discover</Text>
        </Button>

        <Button
          vertical
          // active={props.activeTab === NAV_MESSAGES}
          onPress={() => {}}
        >
          <BadgeText
            badgeSContainertyle={{ position: 'absolute', top: 2, right: -5 }}
            badgeCount={props.pendingMessages}
          >
            <Icon path={''} />
          </BadgeText>
          <Text uppercase={false}>Home</Text>
        </Button>

        <Button
          vertical
          // active={props.activeTab === NAV_MATCHES}
        >
          <BadgeText
            badgeSContainertyle={{ position: 'absolute', top: 2, right: -5 }}
            badgeCount={props.pendingMatches}
          >
            <Icon path={''} />
          </BadgeText>
          <Text uppercase={false}>Bookmark</Text>
        </Button>

        <Button
          vertical
          active={props.navigationState.index === 2}
          onPress={() => {}}
        >
          <Icon path={''} />
          <Text uppercase={false}>Search</Text>
        </Button>
      </FooterTab>
    </Footer>
  </StyleProvider>
);

const styles = StyleSheet.create({
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: sizeFromPercent(2.8),
    width: sizeFromPercent(2.8),
    resizeMode: 'contain',
  },
});

const Icon = props => (
  <Image
    source={props.path}
    style={styles.ImageIconStyle}
  />
);

Icon.propTypes = {
  path: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
  ]).isRequired,
};

NavigationFooter.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  navigationState: PropTypes.shape({
    index: PropTypes.number.isRequired,
  }).isRequired,
  setTab: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  pendingMessages: PropTypes.number.isRequired,
  pendingMatches: PropTypes.number.isRequired,
};

export default NavigationFooter;
