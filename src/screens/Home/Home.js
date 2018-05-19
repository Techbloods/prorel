import React, { Component } from 'react';
import { View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import PropTypes from 'prop-types';
import data from './seed';
import styles from './styles'
import FilterContainer from '../../lib/FilterContainer';
import Filterbox from './Filterbox';
import { NAV_PROPERTIES } from '../../navigation/navigationScreens';

const AppText = (props) => (
  <Text
    style={props.style}
    numberOfLines={1}
    ellipsizeMode="tail"
  >
    {props.children}
  </Text>
)

AppText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.any,
  ]).isRequired,
  style: PropTypes.oneOfType([
    PropTypes.object, PropTypes.string,
    PropTypes.any
  ]).isRequired,
};

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  state = {
    modalVisible: false,
    filterBy: '',
    searchText: '',
    data,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  applyFilter = () => {
    this.setModalVisible(false);
    this.setState({ data: data.filter(item => item[this.state.filterBy] === this.state.searchText)});
  }

  keyExtractor = item => String(item.id);

  renderedRow = ({ item }) => (
    <TouchableOpacity onPress={() => this.props.navigation.navigate(NAV_PROPERTIES)} >
      <View key={item.propertyId} style={styles.row}>
        <AppText style={[styles.text, styles.bottomBorder]}>{item.name}</AppText>
        <AppText style={[styles.text, styles.bottomBorder]}>{item.id}</AppText>
        <AppText style={[styles.text, styles.bottomBorder]}>{item.phone}</AppText>
        <AppText style={[styles.text, styles.bottomBorder]}>{item.email}</AppText>
      </View>
    </TouchableOpacity>
);

renderModal = () => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={this.state.modalVisible}
    onRequestClose={() => {}}>
    <Filterbox
      onCancel={() => this.setModalVisible(!this.state.modalVisible)}
      onAccept={() => this.applyFilter()}
      filterBy={(filterBy) => this.setState({ filterBy })}
      SearchText={(searchText) => this.setState({ searchText })}
    />
  </Modal>
)

  render() {
    return (
      <FilterContainer
        onFilterPressed={() => this.setModalVisible(true)}
      >
        {this.renderModal()}
        <View style={[styles.row, { height: 50 }]}>
          <AppText style={[styles.text, styles.headingText]}> Clients </AppText>
          <AppText style={[styles.text, styles.headingText]}> Property ID</AppText>
          <AppText style={[styles.text, styles.headingText]}> Phone No</AppText>
          <AppText style={[styles.text, styles.headingText]}> Email</AppText>
        </View>

        <FlatList
          style={styles.flatList}
          keyExtractor={this.keyExtractor}
          showsVerticalScrollIndicator={false}
          extradata={this.state}
          data={this.state.data}
          renderItem={this.renderedRow}
        />
       </FilterContainer>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.any,
  })
}

export default Home;
