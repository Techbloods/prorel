import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Image, Text} from 'react-native'
import ForRent from './ForRent';
import map from '../../../assets/map.png';
import { WHITE } from '../../lib/color';

class PropertySearch extends Component {
  state = { initialPage: 0 };

  render() {
    return (
      <ScrollView contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'space-between',
        backgroundColor: WHITE,
        }} >
        
        <View style={{ flex: 1, }} >
          <ForRent navigation={this.props.navigation} />
       </View>
       
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: '5%', height: 100, marginBottom: '10%', }} >
          <View style={{flexGrow: 1, width: '80%', height: '100%', flexDirection: 'row' ,backgroundColor: '#f3f3f3',
                 alignItems: 'center', justifyContent: 'center' }}>
            <Image source={map} style={{ height: 40, width: 40, tintColor: '#7CBBFF' }} />
            <Text style={{textAlignVertical: 'center', textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}> 
              Search by property by map
              </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

PropertySearch.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default PropertySearch;
