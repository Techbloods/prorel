import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Text} from 'react-native'; 
import data from '../Home/seed';
import styles from '../Home/styles';
import { propertyStyle } from './styles';
import AppText from '../../lib/AppText';
import PropertyPicker from './PropertyPicker';
import AppButton from '../../lib/AppButton';

export const InputTextRenderer = (props) => (
  <View style={props.componentStyle}>
    <AppText style={[props.textStyle, {marginBottom: 4}]}> {props.title}</AppText>
    <TextInput
      style={[styles.searchfield, styles.borderBox, {fontSize: 16, textAlignVertical: 'center', textAlign: 'center'}]}
      value={props.inputTextValue}
      keyboardType={props.keyboardType}
      placeholder={props.placeholder}
      onChangeText={input => props.onChangeText( input )}
      underlineColorAndroid="transparent"
    />
  </View>
);

class PropertiesFilterbox extends Component {
  state = { 
      searchValue: '',
      selectedState: '',
      locality: '',
      beds: '',
      bugdet: '',
      types: '',
      requestedBy: '',
      from: '',
      to: '',
  }

  componentWillUnMount() {
    const data =  {
      searchValue: this.state.searchValue,
      selectedState: this.state.selectedState,
      locality: this.state.locality,
      beds: this.state.beds,
      bugdet: this.state.bugdet,
      types: this.state.types,
      requestedBy: this.state.requestedBy,
      from: this.state.from,
      to: this.state.to,
  }
    this.props.filterSelection(data);
  }

  render() {
    return (
        <View style={styles.modalcontainer}>
          <View style={[styles.modalContentWrapper, {height: '80%'}]}>
          <Text>FILTER BY</Text>

          <TextInput
            style={[styles.searchfield, styles.borderBox, { marginTop: '5%', marginBottom: '5%',}]}
            value={this.state.inputText}
            placeholder="Enter your search here"
            onChangeText={searchValue => this.setState({ searchValue })}
            underlineColorAndroid="transparent"
          />
          
          <View style={propertyStyle.propertyRow}>
              <PropertyPicker
                componentStyle={ propertyStyle.rowItem }
                title="State"
                dataset={data}
                selectedValue={this.state.selectedState}
                onValueChange={(selectedState) => this.setState({ selectedState })}/>

              <PropertyPicker
                componentStyle={ propertyStyle.rowItem }
                title="Locality" dataset={data}
                selectedValue={this.state.locality}
                onValueChange={(locality) => this.setState({ locality })} />
            </View>

            <View style={propertyStyle.propertyRow}>
              <InputTextRenderer
                componentStyle={ propertyStyle.rowItem }
                keyboardType="numeric"
                title="Beds"
                placeholder="Beds"
                dataset={data} onChangeText={(beds) => this.setState({  beds })} />

              <InputTextRenderer 
                componentStyle={ propertyStyle.rowItem }
                keyboardType="numeric"
                title="Maximum Budget"
                placeholder="Maximum Budget"
                dataset={data} onChangeText={(budget) => this.setState({ budget })} />
            </View>

            <View style={propertyStyle.propertyRow}>
              <PropertyPicker 
                title="Type"
                componentStyle={ propertyStyle.rowItem }
                dataset={data}
                selectedValue={this.state.type}
                onValueChange={(type) => this.setState({  type })} />

              <PropertyPicker 
                title="Requested By"
                componentStyle={propertyStyle.rowItem }
                dataset={data}
                selectedValue={this.state.requestedBy}
                onValueChange={(requestedBy) => this.setState({ requestedBy })} />
            </View>

            <View style={[propertyStyle.propertyRow, { alignItems: 'flex-end', justifyContent: 'flex-end', marginBottom: 10,}]}>
              <AppButton backgroundStyle={{ width: 70 , marginRight: 5}} onPress={this.props.onAccept} title="Ok" />
              <AppButton  backgroundStyle={{ width: 70 }}onPress={this.props.onCancel} title="cancel" />
            </View>
          </View>

        </View>
    )
  }
}

PropertiesFilterbox.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onAccept: PropTypes.func.isRequired,
  filterSelection: PropTypes.func.isRequired,
};

InputTextRenderer.default = {
  keyboardType: 'all',
  onChangeText: () => {},
  textStyle: {},
  inputTextValue: '',
  title: '',
  placeholder: '',
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
};


export default PropertiesFilterbox;