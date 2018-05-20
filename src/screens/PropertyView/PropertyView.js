import React, { Component } from 'react';
import { View, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import FilterContainer from '../../lib/FilterContainer';
import EmptyContent from '../../lib/EmptyContent';
import AppText from '../../lib/AppText';
import styles from '../../lib/styles';
import data from '../Home/seed';
import AppButton from '../../lib/AppButton';

class PropertyView extends Component {
  static navigationOptions = {
    title: 'My Properties'
  };

  state = {
    data,
  }

  keyExtractor = item => String(item.id);

  renderedRow = ({ item }) => (
    <View style={{flex: 1, alignItems: 'flex-start', justifyContent:'space-between'}}>
    <Image source={} style={{ flex: 2 }} />
    <View 
      key={item.propertyId} 
      style={[styles.column, styles.shadow,{ width: '85%', 
      margin: 15, paddingBottom: 10, paddingTop: 10, paddingStart: 10, paddingEnd: 10 }]}>
        <AppText style={[styles.text, { fontSize: 40, fontWeight: 'bold', textAlign: 'left' }]}> {item.name}</AppText>
        <AppText style={[styles.text, { fontSize: 30 }]}>{item.id} </AppText>
        <AppText style={[styles.text, { fontSize: 18 }]}>{item.phone}</AppText>
        <View>
          <AppButton backgroundStyle={{ flexGrow: 2,}} />
          <AppButton  backgroundStyle={{ flexGrow: 1.5}}/>
        </View>
    </View>
    </View>
);

  render() {
    return (
      <FilterContainer
        onFilterPressed={() => this.setModalVisible('profile', true)}
      >
        {this.state.data ?
          <FlatList
            style={styles.flatList}
            keyExtractor={this.keyExtractor}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={this.renderedRow}
          /> : 
          <EmptyContent
            textStyle={{ fontSize: 18, textAlignVertical: 'center', textAlign: 'center', color: 'grey', marginBottom: 30,  fontWeight: 'bold' }}
            message="No Result Found"
          />
        }
          
      </FilterContainer>
    );
  }
}

PropertyView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.any,
  })
}

export default PropertyView;
