import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View,  } from 'react-native';
import DrawerWrapper from '../../lib/DrawerComponent';
import AppButton from '../../lib/AppButton';
import styles from './styles';
import InputTextRenderer from '../../lib/InputTextRenderer';
import { WHITE } from '../../lib/color';
import { sizeFromPercent } from '../../utils/resize';


class AgentSignUp extends Component {
  render() {
    return (
      <DrawerWrapper 
        navigation={this.props.navigation}
        title="AGENT SIGN-UP" >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          
        <View style={[styles.propertyRow, styles.propertyItemSmall, {flexDirection: 'column', padding:'5%'}]}>
          <InputTextRenderer
            textStyle={{color: 'black', fontSize: 14 }}
            textInputStyle={{backgroundColor: 'rgba(255,255,255,0.2)', color: 'black', fontSize: 14,
                textAlign: 'left', paddingLeft: 10}}
            componentStyle={ [styles.rowItem, { width: '100%' }]}
            placeholderTextColor="grey"
            keyboardType="numeric"
            title="Full Name"
            placeholder="Name"
            onChangeText={(name) => this.setState({  name })} />

          <InputTextRenderer 
            textStyle={{color: 'black', fontSize: 14 }}
            textInputStyle={{backgroundColor: 'rgba(255,255,255,0.2)', color: 'black', fontSize: 14,
                textAlign: 'left', paddingLeft: 10}}
            componentStyle={ [styles.rowItem, { width: '100%' }]}
            placeholderTextColor="grey"
            keyboardType="email-address"
            title="Email Address"
            placeholder="Email"
            onChangeText={(email) => this.setState({ email })} />

          <InputTextRenderer 
            textStyle={{color: 'black', fontSize: 14 }}
            textInputStyle={{backgroundColor: 'rgba(255,255,255,0.2)', color: 'black', fontSize: 14,
                textAlign: 'left', paddingLeft: 10}}
            componentStyle={ [styles.rowItem, { width: '100%' }]}
            placeholderTextColor="grey"
            keyboardType="visible-password"
            title="Password"
            placeholder="Password"
            onChangeText={(password1) => this.setState({ password1 })} />

          <InputTextRenderer 
            textStyle={{color: 'black', fontSize: 14 }}
            textInputStyle={{backgroundColor: 'rgba(255,255,255,0.2)', color: 'black', fontSize: 14,
                textAlign: 'left', paddingLeft: 10}}
            componentStyle={ [styles.rowItem, { width: '100%' }]}
            placeholderTextColor="grey"
           keyboardType="visible-password"
            title="Confirm Password"
            placeholder=" "
            onChangeText={(password) => this.setState({ password })} />
        
        <InputTextRenderer 
            textStyle={{color: 'black', fontSize: 14 }}
            textInputStyle={{backgroundColor: 'rgba(255,255,255,0.2)', color: 'black', fontSize: 14,
                textAlign: 'left', paddingLeft: 10}}
            componentStyle={ [styles.rowItem, { width: '100%' }]}
            placeholderTextColor="grey"
            keyboardType="phone-pad"
            title="Phone Number"
            placeholder="Phone Number"
            onChangeText={(phone) => this.setState({ phone })} />

            <View style={{marginTop: '2%', alignSelf: 'flex-end',}}>
              <AppButton  useIcon
                backgroundStyle={{ width: sizeFromPercent(14), height: 40, }} 
                onPress={() => {}} title="signup" />
            </View>

        </View>          
      </View>
    </DrawerWrapper>
    );
  }
}

AgentSignUp.propTypes = {
  navigation: PropTypes.oneOfType([
    PropTypes.any,
  ])
}

export default AgentSignUp;
