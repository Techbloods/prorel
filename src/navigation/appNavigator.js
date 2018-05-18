import { createStackNavigator } from 'react-navigation';
import Home from '../screens/Home/Home';
import PropertyView from '../screens/PropertyView/PropertyView';
import ClientLead from '../screens/ClientLead/ClientLead';
import PropertiesProfile from '../screens/PropertiesProfile/PropertiesProfile';
import ClientRequest from '../screens/ClientRequest/ClientRequest';
import GalleryView from '../screens/GalleryView/GalleryView';
import SearchProperty from '../screens/SearchProperty/SearchProperty';
import Properties from '../screens/Properties/Properties';


export default createStackNavigator({
  Home: { screen: Home },
  ClientLead: { screen: ClientLead },
  ClientRequest: { screen: ClientRequest },
  SearchProperty: { screen: SearchProperty },
  Properties: { screen: Properties },
  PropertiesProfile: { screen: PropertiesProfile },
  GalleryView: { screen: GalleryView },
  PropertyView: { screen: PropertyView },
});