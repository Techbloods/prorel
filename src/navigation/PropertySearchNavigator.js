import { createStackNavigator } from 'react-navigation';
import { THEME } from '../lib/color';
import PropertySearch from '../screens/PropertySearch/PropertySearch';

export default createStackNavigator({
  PropertySearch: { screen: PropertySearch },
  // BookMarks: { screen: BookMarks },
  // RequestProperty: { screen: RequestProperty },
  // SubmitProperty: { screen: SubmitProperty },
  // BookAppointment: { screen: BookAppointment },
  // ContactUs: { screen: ContactUs },
  // Support : { screen: Support },
  // LoginOrRegister: { screen: LoginOrRegister },
},
{
  navigationOptions: {
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
