import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View,  } from 'react-native';
import DrawerWrapper from '../../lib/DrawerComponent';
import AppButton from '../../lib/AppButton';
import styles from './styles';
import InputTextRenderer from '../../lib/InputTextRenderer';
import { WHITE } from '../../lib/color';
import { sizeFromPercent } from '../../utils/resize';


class ForgotPassword extends Component {
  render() {
    return (
      <DrawerWrapper 
        navigation={this.props.navigation}
        title="AGENT SIGN-UP" >
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={[styles.propertyRow, styles.propertyItemSmall,
             {flexDirection: 'column', alignItems: 'flex-end',  justifyContent: 'center',
              backgroundColor: 'white', padding: '2%', width: '95%', height: '50%'}]}>
  
          <InputTextRenderer 
            textStyle={{color: 'white', fontSize: 14 }}
            textInputStyle={{backgroundColor: 'rgba(255,255,255,0.2)', color: WHITE , fontSize: 14,
               borderWidth: 0, textAlign: 'left', paddingLeft: 3}}
            componentStyle={ [styles.rowItem, { width: '100%'}]}
            keyboardType="numeric"
            placeholderTextColor="grey"
            title="Email Address"
            placeholder="Email"
            onChangeText={(email) => this.setState({ email })} />

            <View style={{marginTop: '2%', }}>
              <AppButton  useIcon
                backgroundStyle={{ width: sizeFromPercent(14), height: 40, borderRadius: 3, }} 
                onPress={() => {}} title="submit" />
            </View>
        </View>          
      </View>
    </DrawerWrapper>
    );
  }
}

ForgotPassword.propTypes = {
  navigation: PropTypes.oneOfType([
    PropTypes.any,
  ])
}

export default ForgotPassword;
