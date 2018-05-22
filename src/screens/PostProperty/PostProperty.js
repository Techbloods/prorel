import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View,  } from 'react-native';
import DrawerWrapper from '../../lib/DrawerComponent';
import AppButton from '../../lib/AppButton';
import styles from './styles';
import InputTextRenderer from '../../lib/InputTextRenderer';
import { WHITE } from '../../lib/color';


class PostProperty extends Component {
  render() {
    return (
      <DrawerWrapper 
        navigation={this.props.navigation}
        title="Post a Property" >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          
        <View style={[styles.propertyRow, styles.propertyItemSmall, {flexDirection: 'column'}]}>
          <InputTextRenderer
            textStyle={{color: 'white', fontSize: 14 }}
            textInputStyle={{backgroundColor: 'rgba(255,255,255,0.2)', color: WHITE , fontSize: 14,
               borderWidth: 0, textAlign: 'left', paddingLeft: 10}}
            componentStyle={ [styles.rowItem, { }]}
            keyboardType="numeric"
            placeholderTextColor="white"
            title="Purpose"
            placeholder="- Select Use For Property -"
            onChangeText={(name) => this.setState({  name })} />

          <InputTextRenderer 
            textStyle={{color: 'white', fontSize: 14 }}
            textInputStyle={{backgroundColor: 'rgba(255,255,255,0.2)', color: WHITE , fontSize: 14,
               borderWidth: 0, textAlign: 'left', paddingLeft: 10}}
            componentStyle={ [styles.rowItem, { }]}
            keyboardType="numeric"
            placeholderTextColor="white"
            title="Use of Property"
            placeholder="- Select Use of Property -"
            onChangeText={(email) => this.setState({ email })} />
        </View>
        <View style={[styles.propertyRow, styles.propertyItemSmall,]}>
        
          <InputTextRenderer 
            textStyle={{color: 'white', fontSize: 14 }}
            textInputStyle={{backgroundColor: 'rgba(255,255,255,0.2)', color: WHITE , fontSize: 14,
               borderWidth: 0, textAlign: 'left', paddingLeft: 10}}
            componentStyle={ [styles.rowItem, { }]}
            keyboardType="password"
            placeholderTextColor="white"
            title="BedRooms"
            placeholder="- Select Qty -"
            onChangeText={(password1) => this.setState({ password1 })} />

          <InputTextRenderer 
            textStyle={{color: 'white', fontSize: 14 }}
            textInputStyle={{backgroundColor: 'rgba(255,255,255,0.2)', color: WHITE , fontSize: 14,
               borderWidth: 0, textAlign: 'left', paddingLeft: 10}}
            componentStyle={ [styles.rowItem, { }]}
            keyboardType="password"
            placeholderTextColor="white"
            title="Bathrooms"
            placeholder="- Select Qty -"
            onChangeText={(password) => this.setState({ password })} />
        
         </View>

         <View style={[styles.propertyRow, styles.propertyItemSmall,]}>
        
        <InputTextRenderer 
          textStyle={{color: 'white', fontSize: 14 }}
          textInputStyle={{backgroundColor: 'rgba(255,255,255,0.2)', color: WHITE , fontSize: 14,
             borderWidth: 0, textAlign: 'left', paddingLeft: 10}}
          componentStyle={ [styles.rowItem, { }]}
          keyboardType="password"
          placeholderTextColor="white"
          title="BedRooms"
          placeholder="- Select Qty -"
          onChangeText={(password1) => this.setState({ password1 })} />

        <InputTextRenderer 
          textStyle={{color: 'white', fontSize: 14 }}
          textInputStyle={{backgroundColor: 'rgba(255,255,255,0.2)', color: WHITE , fontSize: 14,
             borderWidth: 0, textAlign: 'left', paddingLeft: 10}}
          componentStyle={ [styles.rowItem, { }]}
          keyboardType="password"
          placeholderTextColor="white"
          title="Bathrooms"
          placeholder="- Select Qty -"
          onChangeText={(password) => this.setState({ password })} />
      
       </View>

            <AppButton 
              backgroundStyle={{ alignSelf: 'flex-end'}}
              title="Sign Up" />

      </View>
    </DrawerWrapper>
    );
  }
}

PostProperty.propTypes = {
  navigation: PropTypes.oneOfType([
    PropTypes.any,
  ])
}

export default PostProperty;
