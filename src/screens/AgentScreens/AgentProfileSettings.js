import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Text, Image } from 'react-native';
import DrawerWrapper from '../../lib/DrawerComponent';
import AppButton from '../../lib/AppButton';
import styles from './styles';
import { THEME, WHITE } from '../../lib/color';
import { resizeWidth, resizeHeight, sizeFromPercent } from '../../utils/resize';
import { NAV_AGENT_PROFILE } from '../../navigation/navigationScreens';

class AgentProfileSettings extends Component {
  state ={ 
    inputText: '',
    searchValue: ''
  }
  render() {
    return (
      <DrawerWrapper 
        navigation={this.props.navigation}
        title="Agent Profile Settings" >
      <View style={{flex: 1, width: '100%', height: '100%', backgroundColor: WHITE, alignItems: 'center', justifyContent: 'center', }}>
        <View style={{width: '90%', backgroundColor: WHITE, height: '100%', margin: 'auto'}}>
          <TextInput
              style={[styles.searchfield, styles.borderBox, { width: '100%', marginTop: '5%', }]}
              value={this.state.inputText}
              placeholder="Agent/Agency Name"
              onChangeText={searchValue => this.setState({ searchValue })}
              underlineColorAndroid="transparent"
              />
            <TextInput
                style={[styles.searchfield, styles.borderBox, { width: '100%', marginTop: '3%', }]}
                value={this.state.inputText}
                placeholder="Address"
                onChangeText={searchValue => this.setState({ searchValue })}
                underlineColorAndroid="transparent"
              />
            <TextInput
                style={[styles.searchfield, styles.borderBox, { width: '100%', marginTop: '3%', }]}
                value={this.state.inputText}
                placeholder="Email"
                onChangeText={searchValue => this.setState({ searchValue })}
                underlineColorAndroid="transparent"
              />
            <TextInput
                style={[styles.searchfield, styles.borderBox, { width: '100%', marginTop: '3%', }]}
                value={this.state.inputText}
                placeholder="Phone Number"
                onChangeText={searchValue => this.setState({ searchValue })}
                underlineColorAndroid="transparent"
              />

              <Text style={{borderBottomColor: THEME, fontSize: 24, fontWeight: 'bold', paddingBottom: '2%',
              borderBottomWidth: 2, marginTop: '10%', marginBottom: '15%'}}>Agent/Agency picture</Text>

              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: '2%'}}>
                  <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwSCru2eKRivIGrq4jzbWOVGCnGUVNIQN3y9RiNQ2MpXVzaNtvUQ"}}
                      style={{ height: 150, width: 150, borderRadius: 75, borderColor: 'grey', borderWidth: 1}} />
              </View>

              <View style={[styles.propertyRow, { marginTop: '3%', marginBottom: '5%'}]}>
                <AppButton 
                  backgroundStyle={{ width: resizeWidth(30), borderRadius: sizeFromPercent(4.5), height: resizeHeight(8), margin: '5%', alignSelf: 'flex-start' }}
                  onPress={() => this.props.navigation.navigate(NAV_AGENT_PROFILE)} title="Add Photos" />
                <AppButton  backgroundStyle={{ width: resizeWidth(30) , borderRadius: sizeFromPercent(4.5), margin: '5%', alignSelf: 'flex-end', height: resizeHeight(8), }} onPress={() => {}} title="Replace" />
              </View>

              <View style={{margin: '5%'}} />
          
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
