import React, { Component } from 'react';
import {
  View,
  TextInput,
  Image
} from 'react-native';
import styles from '../../lib/styles';
import PropTypes from 'prop-types';
import { propertyStyle } from '../Properties/styles';
import data from '../Home/seed';
import PropertyPicker from '../Properties/PropertyPicker';
import AppButton from '../../lib/AppButton';
import AppText from '../../lib/AppText';
import { resizeWidth } from '../../utils/resize';
import { WHITE, THEME } from '../../lib/color';
import searchIcon from '../../../assets/search.png'
import { NAV_PROPERTY_VIEW } from '../../navigation/navigationScreens';

export const InputTextRenderer = (props) => (
  <View style={props.componentStyle}>
    <AppText style={[props.textStyle, {marginBottom: 4}]}> {props.title}</AppText>
    <TextInput
      style={[styles.searchfield, styles.borderBox, {fontSize: 16, textAlignVertical: 'center', textAlign: 'center'}, props.textInputStyle]}
      value={props.inputTextValue}
      keyboardType={props.keyboardType}
      placeholder={props.placeholder}
      placeholderTextColor={props.placeholderTextColor}
      onChangeText={input => props.onChangeText( input )}
      underlineColorAndroid="transparent"
    />
  </View>
);



class ForRent extends Component {
  state = {

  };

  navigate = (to) => {
    this.props.navigation.navigate(to);
  }

  render() {
    return (
      <View style={{flex: 0, height: '80%', width: '100%', }}>

      <View style={[styles.propertyRow,
        {flex: 0, flexDirection: 'row',height: 50,  backgroundColor: 'white', alignItems: 'center', width: '100%',
               justifyContent: 'space-evenly'}]}>
          <AppButton  backgroundStyle={{ backgroundColor: 'white', flex: 1, borderRadius: 0, width: resizeWidth(33)}}
              textStyle={{ color: 'black' }}
              onPress={() => alert("yarn clicked rent")} title="FOR RENT" />
          <AppButton  backgroundStyle={{ borderBottomWidth: 5, borderBottomColor: '#7CBBFF', backgroundColor: '#fff',
          flex: 1, borderRadius: 0, width: resizeWidth(33)}}
          textStyle={{ color: 'black' }}
              onPress={() => alert("yarn clicked me")} title="FOR SALE" />
          <AppButton  backgroundStyle={{ backgroundColor: '#fff', flex: 1,  borderRadius: 0,width: resizeWidth(33) }}
              textStyle={{ color: 'black' }}
              onPress={() => alert("yarn clicked me")} title="SHORT LET" />
      </View>

      <View style={[styles.modalContentWrapper, {flex: 1, height: '85%', width: '100%', backgroundColor: THEME,}]}>
      
      
      <View style={[ styles.propertyRow, styles.borderBox, 
        { flex: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', backgroundColor: WHITE}]}>
        <Image source={searchIcon} style={{height: 20, width: 20, marginLeft: '2%' }} />
        <TextInput
        style={[styles.searchfield, { flex: 1, fontSize: 18, marginLeft: '2%', marginTop: '2%', marginBottom: '2%', backgroundColor: WHITE}]}
        value={this.state.inputText}
        placeholder="Search by PID or Area"
        placeholderTextColor="black"
        onChangeText={searchValue => this.setState({ searchValue })}
        underlineColorAndroid="transparent"
      />

      </View>
      
      
      <View style={[propertyStyle.propertyRow, propertyStyle.propertyItemSmall]}>
          <PropertyPicker
            pickerStyle={{backgroundColor: 'rgba(255,255,255,0.2)',borderWidth: 0, }}
            pickerTextStyle={{color: WHITE }}
            
            componentStyle={ propertyStyle.rowItem }
            title="State"
            dataset={data}
            selectedValue={this.state.selectedState}
            onValueChange={(selectedState) => this.setState({ selectedState })}/>

          <PropertyPicker
            pickerStyle={{backgroundColor: 'rgba(255,255,255,0.2)',borderWidth: 0, }}
            pickerTextStyle={{color: WHITE }}
            componentStyle={ propertyStyle.rowItem }
            title="Locality" dataset={data}
            selectedValue={this.state.locality}
            onValueChange={(locality) => this.setState({ locality })} />
        </View>

        <View style={[propertyStyle.propertyRow, propertyStyle.propertyItemSmall]}>
          <InputTextRenderer
            textStyle={{color: 'white', fontSize: 14 }}
            textInputStyle={{backgroundColor: 'rgba(255,255,255,0.2)', color: WHITE , fontSize: 14,
               borderWidth: 0, textAlign: 'left', paddingLeft: 10}}
            componentStyle={ [propertyStyle.rowItem, { }]}
            keyboardType="numeric"
            placeholderTextColor="white"
            title="Beds"
            placeholder="Beds"
            dataset={data} onChangeText={(beds) => this.setState({  beds })} />

          <InputTextRenderer 
            textStyle={{color: 'white', fontSize: 14 }}
            textInputStyle={{backgroundColor: 'rgba(255,255,255,0.2)', color: WHITE , fontSize: 14,
               borderWidth: 0, textAlign: 'left', paddingLeft: 10}}
            componentStyle={ [propertyStyle.rowItem, { }]}
            keyboardType="numeric"
            placeholderTextColor="white"
            title="Maximum Budget"
            placeholder="Maximum Budget"
            dataset={data} onChangeText={(budget) => this.setState({ budget })} />
        </View>

        <View style={[propertyStyle.propertyRow, propertyStyle.propertyItemSmall]}>
          <PropertyPicker 
            title="Type"
            pickerStyle={{backgroundColor: 'rgba(255,255,255,0.2)',borderWidth: 0, }}
            pickerTextStyle={{color: WHITE }}
            
            componentStyle={ propertyStyle.rowItem }
            dataset={data}
            selectedValue={this.state.type}
            onValueChange={(type) => this.setState({  type })} />

          <PropertyPicker 
            title="Requested By"
            pickerStyle={{backgroundColor: 'rgba(255,255,255,0.2)',borderWidth: 0, }}
            pickerTextStyle={{color: WHITE }}
            
            componentStyle={ propertyStyle.rowItem }
            dataset={data}
            selectedValue={this.state.requestedBy}
            onValueChange={(requestedBy) => this.setState({ requestedBy })} />
        </View>

        <View style={[propertyStyle.propertyRow, { alignItems: 'center', justifyContent: 'center', marginBottom: 30,}]}>
          <AppButton  backgroundStyle={{ backgroundColor: '#7CBBFF', width: resizeWidth(90) }}
            onPress={() => this.navigate(NAV_PROPERTY_VIEW)} title="Search" />
        </View>
      </View>

    </View>
    );
  }
}

InputTextRenderer.default = {
  keyboardType: 'all',
  onChangeText: () => {},
  textStyle: {},
  inputTextValue: '',
  title: '',
  placeholder: '',
  textInputStyle: {},
  placeholderTextColor: "black",
}

InputTextRenderer.propTypes = {
  keyboardType: PropTypes.oneOfType([
    PropTypes.any,
  ]),
  onChangeText: PropTypes.func.isRequired,
  componentStyle: PropTypes.oneOfType([
    PropTypes.any,
  ]),
  textStyle: PropTypes.oneOfType([
    PropTypes.any,
  ]),
  inputTextValue: PropTypes.string,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  textInputStyle: PropTypes.oneOfType([
    PropTypes.any,
  ]),
  placeholderTextColor: PropTypes.oneOfType([
    PropTypes.any,
  ]),
};

ForRent.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.any,
  })
}

export default ForRent;
