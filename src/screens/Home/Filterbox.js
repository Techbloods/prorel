import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View,
  TextInput,
  Picker,
  Text,
  TouchableNativeFeedback
} from 'react-native'; 
import styles from './styles';


const AppButton = ({ onClick, children }) => (
  <TouchableNativeFeedback
      onPress={onClick}
    >
      <View style={styles.buttonStyle}>
        <Text style={styles.buttonStyleText}>{children}</Text>
      </View>
    </TouchableNativeFeedback>
);

AppButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element, PropTypes.string,
  ]).isRequired,
};

class FilterBox extends Component {
  state = {
    filter: 'client',
    searchValue: '',
  }

  componentWillUnMount() {
    this.props.filterBy(this.state.filter);
    this.props.SearchText(this.state.searchValue);
  }

  render() {
    return (
      <View style={styles.modalcontainer}>
      <View style={styles.modalContentWrapper}>
        <Text>FILTER BY</Text>
        <View style={[styles.borderBox, { marginTop: '10%', marginBottom: '10%'}]}>

          <Picker
            selectedValue={this.state.filter}
            style={{ height: '100%',}}
            itemStyle={{ padding: 10, borderBottomColor: 'steelblue', margin: 2, borderWidth: 2, borderColor: 'steelblue' }}
            onValueChange={(filter) => this.setState({ filter })}>
              <Picker.Item label="Client" value="Client Id" />
              <Picker.Item label="Property Id" value="Property Id" />
              <Picker.Item label="Phone Number" value="Phone Number" />
              <Picker.Item label="Email" value="Email" />
          </Picker>
          
        </View>
        <TextInput
            style={[styles.searchfield, styles.borderBox]}
            value={this.state.inputText}
            onChangeText={searchValue => this.setState({ searchValue })}
            underlineColorAndroid="transparent"
          />
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }} >
            <AppButton onClick={this.props.onCancel}>Cancel</AppButton>
            <AppButton onClick={this.props.onAccept}>Ok</AppButton>
          </View>
        </View>

      </View>
    )
  }
}

FilterBox.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onAccept: PropTypes.func.isRequired,
  filterBy: PropTypes.func.isRequired,
  SearchText: PropTypes.func.isRequired,
};

export default FilterBox;