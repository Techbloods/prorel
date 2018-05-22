import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import DrawerWrapper from '../../lib/DrawerComponent';
import AppButton from '../../lib/AppButton';
import styles from './styles';
import { sizeFromPercent } from '../../utils/resize';
import { WHITE } from '../../lib/color';
import search from '../../../assets/search.png';
import { NAV_SIGN_UP, NAV_LOGIN } from '../../navigation/navigationScreens';

class AgentProfileSettings extends Component {
  render() {
    return (
      <DrawerWrapper 
        navigation={this.props.navigation}
        title="AGENT PROFILE" >
      <View style={{flex: 1, backgroundColor: WHITE, justifyContent: 'space-evenly'}}>
        <View style={{ flex: 0, alignItems: 'center', justifyContent: 'space-evenly'}}>
          
          <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwSCru2eKRivIGrq4jzbWOVGCnGUVNIQN3y9RiNQ2MpXVzaNtvUQ"}}
              style={{ height: sizeFromPercent(30), width: sizeFromPercent(30)}} />
        
        <View style={{width: sizeFromPercent(30), height: 40, flexDirection: 'row',
          alignItems: 'center', justifyContent: 'space-between',
          backgroundColor: 'white'}}>
            <Text style={{ fontSize: sizeFromPercent(2.2)}}>Rating</Text>
            <Text style={{ fontSize: sizeFromPercent(2.2)}}>5 reviews</Text>
        </View>
        </View>

        
        
        <View style={[styles.propertyRow, { alignItems: 'center', justifyContent: 'center', marginBottom: '2%',}]}>
          <AppButton
           useIcon
           icon={search}
           backgroundStyle={{ alignSelf: 'flex-start', width: sizeFromPercent(20), height: 50, marginRight: 5}} 
              onPress={() => this.props.navigation.navigate(NAV_SIGN_UP)}
               title="call" />
          <AppButton  useIcon
           icon={search}
           backgroundStyle={{ alignSelf: 'flex-start', width: sizeFromPercent(20), height: 50, marginRight: 5}} 
              onPress={() => this.props.navigation.navigate(NAV_LOGIN)} title="Message" />
        </View>
      </View>
    </DrawerWrapper>
    );
  }
}

AgentProfileSettings.propTypes = {
  navigation: PropTypes.oneOfType([
    PropTypes.any,
  ])
}

export default AgentProfileSettings;
