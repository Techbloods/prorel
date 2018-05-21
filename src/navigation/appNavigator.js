import React from 'react-native'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Home from '../screens/Home/Home';
import PropertyView from '../screens/PropertyView/PropertyView';
import ClientLead from '../screens/ClientLead/ClientLead';
import PropertiesProfile from '../screens/PropertiesProfile/PropertiesProfile';
import ClientRequest from '../screens/ClientRequest/ClientRequest';
import GalleryView from '../screens/GalleryView/GalleryView';
import PropertySearch from '../screens/PropertySearch/PropertySearch';
import Properties from '../screens/Properties/Properties';
import PostProperty from '../screens/PostProperty/PostProperty';
import { THEME } from '../lib/color';

export default createDrawerNavigator({
  // PostProperty: { screen: PostProperty },
  Home: { screen: Home },
  ClientLead: { screen: ClientLead },
  ClientRequest: { screen: ClientRequest },
  PropertySearch: { screen: PropertySearch },
  Properties: { screen: Properties },
  PropertiesProfile: { screen: PropertiesProfile },
  GalleryView: { screen: GalleryView },
  PropertyView: { screen: PropertyView },
},
{
  drawerWidth: 300,
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: THEME,
    }, 
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
}
);
