import React, { Component } from 'react';
import { View, FlatList, Image, Text, Modal} from 'react-native';
import PropTypes from 'prop-types';
import FilterContainer from '../../lib/FilterContainer';
import EmptyContent from '../../lib/EmptyContent';
import AppText from '../../lib/AppText';
import styles from '../../lib/styles';
import data from '../Home/seed';
import AppButton from '../../lib/AppButton';
import { resizeWidth, resizeHeight } from '../../utils/resize';
import PropertyViewFilter from './PropertyViewFilter';

class PropertyView extends Component {
  static navigationOptions = {
    title: 'My Properties'
  };

  state = {
    modalVisible: false,
    filterBy: '',
    data,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  applyFilter = () => {
    this.setModalVisible(false);
  }

  keyExtractor = item => String(item.id);

  renderedRow = ({ item }) => (
    <View style={[styles.shadow, {flex: 1, flexDirection: 'row', alignItems: 'center',
     justifyContent:'center', width: '95%', alignSelf: 'center', marginTop: '3%', backgroundColor: 'white'}]}>

     <View style={{ flex: 1,alignItems: 'center', justifyContent: 'center',
           paddingStart: '1%', paddingBottom: '5%', paddingTop: '5%', paddingEnd: '1%'}}>
        <Image source={{uri: 'https://www.crossworldproperties.com/wp-content/uploads/2017/04/Houseimages-835x467.jpeg'}}
        style={{ height: '100%', width: '100%', resizeMode: 'cover', borderWidth: 4, borderColor: '#F7F7F7' }} />
      </View>
    <View 
      key={item.propertyId} 
      style={[styles.column, { flexGrow: 1, marginTop: 2, paddingStart: 10, marginBottom: '10%' }]}>

        <AppText style={[styles.text, { flex: 0, fontSize: 25, textAlign: 'left', fontWeight: '800', padding: 0, margin: 1, }]}>3 bedRoom flat</AppText>
        <AppText style={[styles.text, { flex: 0, fontSize: 23, color: '#2B2996', fontWeight: '800', padding: 0, margin: 1, }]}>N 450,000.00 </AppText>
        <AppText style={[styles.text, { flex: 0, fontSize: 14 }]}>PID <Text>34323</Text></AppText>
        
        <View  style={[{ flexGrow: 1, width: '90%', alignItems: 'flex-start', justifyContent: 'flex-start' }]}>
          <AppText style={[{ flex: 0, fontSize: 12, color: 'grey' }]}>Location</AppText>

          <View style={[{flex: 0, flexDirection: 'row', alignItems: 'flex-start', width: '100%',
                justifyContent: 'space-between', marginBottom: 3}]}>

            <Text style={{ flex: 2, marginRight: 2, fontSize: 12, textAlign: 'center', color: 'white', fontWeight: '800',
                  backgroundColor: '#4CADE9', height: 30, textAlignVertical: 'center' }}>kosofe/Ojota</Text>

            <Text style={{ flex: 1.5, fontSize: 12, textAlign: 'center', color: 'white', fontWeight: '800',
                  backgroundColor: '#4CADE9', height: 30,  textAlignVertical: 'center' }}>Lagos</Text>
          </View>

          <View style={[{flex: 0, flexDirection: 'row', alignItems: 'center', width: '100%',
                justifyContent: 'flex-start'}]}>
             <AppText style={[{ flex: 1, fontSize: 14, padding: 2, height: 30, textAlign: 'center', color: 'white', fontWeight: '800',
                  backgroundColor: 'red', textAlignVertical: 'center' }]}>Awaiting Approval </AppText>
          </View>

          <View style={[{flex: 0, flexDirection: 'row', alignItems: 'center', width: '100%',
                justifyContent: 'space-evenly', marginTop: resizeHeight(1)}]}>
              <AppButton  backgroundStyle={{ flex: 1, flexGrow: 1, alignSelf: 'flex-start', backgroundColor: '#2E1047', height: 40, minWidth: resizeWidth(20) }}
                  onPress={() => alert("yarn clicked rent")} title="EDIT" />

              <AppButton  backgroundStyle={{ flex: 1, flexGrow: 1, alignSelf: 'flex-end', backgroundColor: '#2E1047', minWidth: resizeWidth(20) }}
                  onPress={() => alert("yarn clicked rent")} title="DELETE" />
          </View>

        </View>

    </View>
    </View>
  );

  renderModal = () => (

    <Modal
      animationType="slide"
      transparent={true}
      visible={this.state.modalVisible}
      onRequestClose={() => {}}>
        <PropertyViewFilter
          onCancel={() => this.setModalVisible('profile', !this.state.modalVisible)}
          onAccept={() => this.applyFilter('')}
          filterSelection={(filterBy) => this.setState({ filterBy })}
        />
    </Modal>
  )
  

  render() {
    return (
      <FilterContainer
        onFilterPressed={() => this.setModalVisible('profile', true)}
      >
      {this.renderModal()}
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
