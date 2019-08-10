import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeIconWithBadge from './components/HomeIconWithBadge';
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SettingsScreen from './screens/SettingsScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Settings: {
      screen: SettingsScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
);

const TabNavigator = createBottomTabNavigator(
  { Home: HomeStack, Products: ProductScreen },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Products') {
          iconName = 'ios-options';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
);

const AuthStack = createStackNavigator({ Login: LoginScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: TabNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);
