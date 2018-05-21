import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Text, TouchableOpacity, DatePickerAndroid} from 'react-native'; 
import data from '../Home/seed';
import styles from '../Home/styles';
import { propertyStyle } from '../Properties/styles';
import AppText from '../../lib/AppText';
import PropertyPicker from '../Properties/PropertyPicker';
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

class PropertyViewFilter extends Component {
  state = { 
      searchValue: '',
      selectedState: '',
      locality: '',
      beds: '',
      fromDate: null,
      toDate: null,
  }

  componentWillUnMount() {
    const data =  {
      searchValue: this.state.searchValue,
      selectedState: this.state.selectedState,
      locality: this.state.locality,
      beds: this.state.beds,
      fromDate: this.state.fromDate,
      toDate: this.state.toDate,
  }
    this.props.filterSelection(data);
  }

  pickDate = async (option) => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: new Date(2020, 4, 25)
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        if(option === 'from'){
          this.setState({ fromDate: `${day}/${month+1}/${year}`})
        }else{
          this.setState({ toDate: `${day}/${month+1}/${year}`})
        }
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }

  render() {
    return (
        <View style={styles.modalcontainer}>
        
        <View style={[styles.modalContentWrapper, { backgroundColor: 'white', 
          width: '90%', height: '60%', alignItems: 'flex-start', justifyContent: 'space-between' ,}]}>
          
          <Text style={{ marginTop: '4%', }}>FILTER BY</Text>

          <TextInput
            style={[styles.searchfield, styles.borderBox, { width: '100%',}]}
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
            <TouchableOpacity
              style={[propertyStyle.rowItem]}
              onPress={() => this.pickDate('from')} >
               <Text style={[{ borderBottomWidth: 1, width: '100%', color: 'grey', borderBottomColor: 'black', height: 50, fontSize: 16, padding: 0,textAlign: 'left'
                , textAlignVertical: 'bottom' }]} >{this.state.fromDate || 'From Date' }</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[propertyStyle.rowItem]}
              onPress={() => this.pickDate('to')} >
               <Text style={[{ borderBottomWidth: 1, width: '100%', color: 'grey', borderBottomColor: 'black', height: 50, fontSize: 16, padding: 0,textAlign: 'left'
                , textAlignVertical: 'bottom' }]} >{this.state.toDate || 'To Date' }</Text>
            </TouchableOpacity>

            </View>

            <View style={[propertyStyle.propertyRow, { alignItems: 'flex-end', justifyContent: 'flex-end', marginBottom: '2%',}]}>
              <AppButton backgroundStyle={{ width: 70 , marginRight: 5}} onPress={this.props.onAccept} title="Ok" />
              <AppButton  backgroundStyle={{ width: 70 }}onPress={this.props.onCancel} title="cancel" />
            </View>
          </View>

        </View>
    )
  }
}

PropertyViewFilter.propTypes = {
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


export default PropertyViewFilter;