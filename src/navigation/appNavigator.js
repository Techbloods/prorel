import { createStackNavigator } from 'react-navigation';
import Home from '../screens/Home/Home';
import PropertyView from '../screens/PropertyView/PropertyView';
import ClientLead from '../screens/ClientLead/ClientLead';
import PropertiesProfile from '../screens/PropertiesProfile/PropertiesProfile';
import ClientRequest from '../screens/ClientRequest/ClientRequest';
import GalleryView from '../screens/GalleryView/GalleryView';
import PropertySearch from './PropertySearchNavigator';
import Properties from '../screens/Properties/Properties';
import { THEME } from '../lib/color';

import BookMarks from '../screens/BookMarks/BookMarks';
import MyRequest from '../screens/ClientRequest/ClientRequest';
import PostProperty from '../screens/PostProperty/PostProperty';
import SubmitProperty from '../screens/SubmitProperty/SubmitProperty';
import RequestProperty from '../screens/RequestProperty/RequestProperty';
import Login from '../screens/LoginOrRegister/Login';
import SignUp from '../screens/LoginOrRegister/SignUp';
import ForgotPassword from '../screens/LoginOrRegister/ForgotPassword';
import AgentProfile from '../screens/AgentScreens/AgentProfile';
import AgentProfileSettings from '../screens/AgentScreens/AgentProfileSettings';
import BookAppointMent from '../screens/BookAppointment/BookAppointment';
import ContactUs from '../screens/ContactUS/ContactUs';
import Support from '../screens/Support/Support';

export default createStackNavigator({
  PropertySearch: { screen: PropertySearch },
  ClientLead: { screen: ClientLead },
  ClientRequest: { screen: ClientRequest },
  PropertyView: { screen: PropertyView },
  Properties: { screen: Properties },
  PropertiesProfile: { screen: PropertiesProfile },
  GalleryView: { screen: GalleryView },
  Home: { screen: Home },
  PostProperty: { screen: PostProperty },
  BookMarks: { screen: BookMarks },
  MyRequest: { screen: MyRequest },
  SubmitProperty: { screen: SubmitProperty },
  RequestProperty: { screen: RequestProperty },
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  ForgotPassword: { screen: ForgotPassword },
  AgentProfile: { screen: AgentProfile },
  AgentProfileSettings: { screen: AgentProfileSettings },
  BookAppointMent: { screen: BookAppointMent },
  ContactUs: { screen: ContactUs },
  Support: { screen: Support },
},
{
  navigationOptions: {
    header: null,
    headerMode: 'screen',
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
