import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import DrawerWrapper from '../../lib/DrawerComponent';
import AppButton from '../../lib/AppButton';
import styles from './styles';
import appStyle from '../../lib/styles';
import InputTextRenderer from '../../lib/InputTextRenderer';
import { WHITE } from '../../lib/color';
import { sizeFromPercent } from '../../utils/resize';
import { NAV_FORGOT_PASSWORD } from '../../navigation/navigationScreens';


class Login extends Component {
  render() {
    return (
      <DrawerWrapper 
        navigation={this.props.navigation}
        title="AGENT LOGIN" >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          
        <View style={[styles.propertyRow, styles.propertyItemSmall,appStyle.shadow,
           {flexDirection: 'column', alignItems: 'flex-start',  justifyContent: 'center', backgroundColor: 'white', padding: '8%', width: '80%', height: '50%'}]}>

          <InputTextRenderer 
            textStyle={{color: 'black', fontSize: 14 }}
            textInputStyle={{backgroundColor: 'rgba(255,255,255,0.2)', color: WHITE , fontSize: 14,
                textAlign: 'left', paddingLeft: 10}}
            componentStyle={ [styles.rowItem, { width: '100%' }]}
            keyboardType="email-address"
            placeholderTextColor="black"
            title="Email Address"
            placeholder="Email"
            onChangeText={(email) => this.setState({ email })} />

          <InputTextRenderer 
            textStyle={{color: 'black', fontSize: 14 }}
            textInputStyle={{backgroundColor: 'rgba(255,255,255,0.2)', color: WHITE , fontSize: 14,
                textAlign: 'left', paddingLeft: 10}}
            componentStyle={ [styles.rowItem, { width: '100%' }]}
            placeholderTextColor="black"
            keyboardType="visible-password"
            title="Password"
            placeholder="Password"
            onChangeText={(password1) => this.setState({ password1 })} />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate(NAV_FORGOT_PASSWORD)}
            >
              <Text style={{fontSize: 10, }}> Forgor Password? </Text>
            </TouchableOpacity>
            <View style={{marginTop: '2%', alignSelf: 'flex-end',}}>
              <AppButton  useIcon
                backgroundStyle={{ width: sizeFromPercent(14), height: 40, }} 
                onPress={() => this.props.navigation.navigate(NAV_FORGOT_PASSWORD)} title="login" />
            </View>

        </View>          
      </View>
    </DrawerWrapper>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.oneOfType([
    PropTypes.any,
  ])
}

export default Login;
