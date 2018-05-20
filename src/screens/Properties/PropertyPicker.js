import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Picker ,View } from 'react-native'; 
import styles from '../Home/styles';
import AppText from '../../lib/AppText';


class PropertyPicker extends Component {
  state = {
    selectedPickerValue: '',
  }

  onPickerValueChange = (selectedPickerValue) => {
    this.setState({ selectedPickerValue });
    this.props.onValueChange(selectedPickerValue)
  }

render(){
  return (
    <View style={this.props.componentStyle}>
        <AppText style={[this.props.pickerTextStyle, { marginBottom: 4}]}> {this.props.title}</AppText>
        <View style={[styles.borderBox, this.props.pickerStyle]}>
          <Picker
            selectedValue={this.state.selectedPickerValue}
            style={[{ height: '100%',}, this.props.pickerComponenentStyle ]}
            itemStyle={[{ padding: 10, borderBottomColor: 'steelblue', margin: 2, borderWidth: 2, borderColor: 'steelblue' },
              this.props.pickerItemStyle]}
              onValueChange={(filter) => this.onPickerValueChange(filter)}>

              {this.props.dataset.map((row) => 
                <Picker.Item key={row.id} label={row.name} value={row.name} />
              )
            }
            
        </Picker>
      </View>
    </View>
  );
 }
 
}

PropertyPicker.default = {
  dataset: [],
  onValueChange: () => {},
  pickerItemStyle: {},
  pickerStyle: {},
  selectedPickerValue: '',
  componentStyle: {},
  pickerComponenentStyle: {},
}

PropertyPicker.propTypes = {
  dataset: PropTypes.oneOfType([
    PropTypes.any,
  ]),
  onValueChange: PropTypes.func.isRequired,
  pickerItemStyle: PropTypes.oneOfType([
    PropTypes.any,
  ]),
  componentStyle: PropTypes.oneOfType([
    PropTypes.any,
  ]),
  pickerStyle: PropTypes.oneOfType([
    PropTypes.any,
  ]),
  pickerTextStyle: PropTypes.oneOfType([
    PropTypes.any,
  ]),
  pickerComponenentStyle: PropTypes.oneOfType([
    PropTypes.any,
  ]),
  title: PropTypes.string.isRequired,
  selectedPickerValue: PropTypes.string,
};

export default PropertyPicker;