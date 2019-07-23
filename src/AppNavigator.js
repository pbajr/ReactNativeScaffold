import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Settings: {
    screen: SettingsScreen
  }
});

export default createAppContainer(AppNavigator);
