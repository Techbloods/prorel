import React, { Component } from 'react';
import { View, TouchableOpacity, Text, FlatList, Modal} from 'react-native';
import PropTypes from 'prop-types';
import FilterContainer from '../../lib/FilterContainer';
import EmptyContent from '../../lib/EmptyContent';
import AppText from '../../lib/AppText';
import styles from '../../lib/styles';
import data from '../Home/seed';
import PropertiesFilterbox from './PropertiesFilterbox';
import { propertyStyle } from './styles';
import AppButton from '../../lib/AppButton';
import { resizeWidth } from '../../utils/resize';
import { NAV_PROPERTY_SEARCH } from '../../navigation/navigationScreens';

const PersonContact = (props) => (

  <View style={styles.modalcontainer}>
    <View style={[styles.modalContentWrapper, {height: '35%', width: '90%', borderRadius: 5,}]}>
      <AppText style= {{ textAlign: 'center', textAlignVertical: 'center', fontSize: 25, color: 'grey', marginTop: '5%' }}>Name: </AppText>
      <AppText style= {{ textAlign: 'center', textAlignVertical: 'center', fontSize: 30, marginBottom: '3%' }} > {props.name} </AppText>
      <View style={[propertyStyle.propertyRow]}>
        <AppButton backgroundStyle={{ width: resizeWidth(30), margin: '5%', alignSelf: 'flex-start' }} onPress={props.onPressCall} title="Call" />
        <AppButton  backgroundStyle={{ width: resizeWidth(30) , margin: '5%', alignSelf: 'flex-end' }} onPress={props.onPressMessage} title="Message" />
      </View>
    </View>
  </View>
)

PersonContact.defaultProps = {
  name: '',
  onPressCall: () => {},
  onPressMessage: () => {},
}

PersonContact.propTypes = {
  name: PropTypes.string,
  onPressCall: PropTypes.func,
  onPressMessage: PropTypes.func,
}

class PropertiesProfile extends Component {
  static navigationOptions = {
    title: 'Property Listing'
  };

  state = {
    data,
    modalVisible: false,
    filterBy: {},
    selectedPerson: {},
    selectedModal: '',
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

      <TouchableOpacity style={{alignSelf: 'flex-end'}} onPress={() => {
        this.setModalVisible('details', true);
        this.setState({ selectedPerson: item });
      }} >
        <View style={styles.buttonStyle}>
        <AppText style={styles.buttonStyleText}>View Client Details</AppText>
        </View>
      </TouchableOpacity>
    </View>
);

setModalVisible(selectedModal, visible) {
  this.setState({ modalVisible: visible, selectedModal })
}

applyFilter = () => {
  this.setModalVisible('',false);
}

renderModal = () => (

  <Modal
    animationType="slide"
    transparent={true}
    visible={this.state.modalVisible}
    onRequestClose={() => {}}>

    {this.state.selectedModal === 'profile' ?
      <PropertiesFilterbox
        onCancel={() => this.setModalVisible('profile', !this.state.modalVisible)}
        onAccept={() => this.applyFilter('')}
        filterSelection={(filterBy) => this.setState({ filterBy })}
      />
      :
      <PersonContact
        name={this.state.selectedPerson.name}
        onPressMessage={() => {
          this.setState({ modalVisible: false});
          this.props.navigation.navigate(NAV_PROPERTY_SEARCH);
        }}
        onPressCall = {() => this.setState({ modalVisible: false})}
      />
    }
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

PropertiesProfile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.any,
  })
}

export default PropertiesProfile;
