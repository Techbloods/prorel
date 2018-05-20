import { createStackNavigator } from 'react-navigation';
import Home from '../screens/Home/Home';
import PropertyView from '../screens/PropertyView/PropertyView';
import ClientLead from '../screens/ClientLead/ClientLead';
import PropertiesProfile from '../screens/PropertiesProfile/PropertiesProfile';
import ClientRequest from '../screens/ClientRequest/ClientRequest';
import GalleryView from '../screens/GalleryView/GalleryView';
import PropertySearch from '../screens/PropertySearch/PropertySearch';
import Properties from '../screens/Properties/Properties';


export default createStackNavigator({
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
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    }, 
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
}
);