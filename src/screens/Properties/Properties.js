import React, { Component } from 'react';
import { View, TouchableOpacity, Text, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import FilterContainer from '../../lib/FilterContainer';
import EmptyContent from '../../lib/EmptyContent';
import AppText from '../../lib/AppText';
import styles from '../../lib/styles';
import data from '../Home/seed';
import { NAV_CLIENT_LEAD } from '../../navigation/navigationScreens';

class PropertiesProfile extends Component {
  static navigationOptions = {
    title: 'Property Listing'
  };

  state = {
    data,
  }

  keyExtractor = item => String(item.id);

  renderedRow = ({ item }) => (
    <View 
      key={item.propertyId} 
      style={[styles.column, styles.shadow,{ width: '85%', margin: 15, paddingBottom: 10, paddingTop: 10, paddingStart: 10, paddingEnd: 10 }]}>
      <AppText style={[styles.text, { fontSize: 18, fontWeight: 'bold', textAlign: 'center' }]}> {item.name}</AppText>
      <AppText style={[styles.text]}>Requested by  <Text style={{color: 'grey'}}> {item.id}</Text></AppText>
      <AppText style={[styles.text]}>Posted Date <Text style={{color: 'grey'}}> {item.phone}</Text></AppText>
      <AppText style={[styles.text, { borderBottomWidth: 0.5, borderBottomColor: 'grey'}]}>Other Details</AppText>
      <AppText style={[styles.text, {color: 'orange'}]}>Maximum budget: #200,000</AppText>

      <TouchableOpacity style={{alignSelf: 'flex-end'}} onPress={() => this.props.navigation.navigate(NAV_CLIENT_LEAD)} >
        <View style={styles.buttonStyle}>
        <AppText style={styles.buttonStyleText}>View Client Details</AppText>
        </View>
      </TouchableOpacity>
    
    </View>
);

  render() {
    return (
      <FilterContainer
        onFilterPressed={() => console.log("hello")}
      >
        {this.state.data.length === 0 ?
          <FlatList
          style={styles.flatList}
          keyExtractor={this.keyExtractor}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={this.renderedRow}
          /> : 
          <EmptyContent 
            messsage="No Result Found"
          />
        }
          
      </FilterContainer>
    );
  }
}

PropertiesProfile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.any,
  })
}

export default PropertiesProfile;
