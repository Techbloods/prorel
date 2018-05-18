import React, { Component } from 'react';
import { View, TextInput, Text, FlatList, TouchableOpacity } from 'react-native';
import data from './seed';
import styles from './styles'

const AppText = (props) => (
  <Text
    style={props.style}
    numberOfLines={1}
    ellipsizeMode="tail"
  >
    {props.children}
  </Text>
)

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  keyExtractor = item => String(item.id);

  onPressItem = (id) => console.log(id);

  filterScreen = () => (
    <View>
      <TextInput />
    </View>
  );

  renderedRow = ({ item }) => (
    <TouchableOpacity onPress={() => this.onPressItem(item.id)} >
      <View key={item.propertyId} style={styles.row}>
        <AppText style={[styles.text, styles.bottomBorder]}>{item.name}</AppText>
        <AppText style={[styles.text, styles.bottomBorder]}>{item.id}</AppText>
        <AppText style={[styles.text, styles.bottomBorder]}>{item.phone}</AppText>
        <AppText style={[styles.text, styles.bottomBorder]}>{item.email}</AppText>
      </View>
    </TouchableOpacity>
);

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.dataView}>

        <Text style={styles.clientLead}>Client Leads</Text>
        <View style={styles.filterBy}>
          <Text style={styles.filterByText}>Filter By</Text>
        </View>

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
            data={data}
            renderItem={this.renderedRow}
          />
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

export default Home;
