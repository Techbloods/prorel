import React, { Component } from 'react';
import { View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles'
import filterIcon from '../../assets/filter.png';
import AppText from './AppText';


class FilterContainer extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dataView}>

        <Text style={styles.clientLead}>{this.props.title}</Text>
        
        <TouchableOpacity style={styles.filterBy} onPress={this.props.onFilterPressed} >

          <View style={styles.filterBy}>
            <Image source={filterIcon} style={{ height: 28, width: 28}} />
            <Text style={styles.filterByText}>Filter By</Text>
          </View>
        </TouchableOpacity>
        
          {this.props.children}
         
        </View>
        <View style={[ styles.row, styles.bottomNav]}>
          <View style={styles.bottomNavItem}>
            <AppText style={{color: '#1E90FF'}}>Find House </AppText>
          </View>
          <View style={styles.bottomNavItem}>
             <AppText style={{color: '#1E90FF',}}>Message</AppText>
            </View>
            <View style={styles.bottomNavItem}>
              <AppText style={{color: '#1E90FF' }}>Bookmarks</AppText>
            </View>
        </View>
        
      </View>
    );
  }
}

FilterContainer.defaultProps = {
  title: 'Client Leads',
  onFilterPressed: () => {},
}

FilterContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.any,
  ]).isRequired,
  title: PropTypes.string,
  onFilterPressed: PropTypes.func,

}

export default FilterContainer;
