import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
  Dimensions
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { primaryColor } from './src/constants/config';
import AppNavigator from './src/AppNavigator';

const AppContainer = createAppContainer(AppNavigator);

const App = () => <AppContainer />;

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: primaryColor,
    height: Dimensions.get('window').height
  },
  scrollView: {
    // backgroundColor: 'blue'
  }
});

// const App = () => {
//   return (
//     <Fragment>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView style={styles.safeAreaView}>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}
//         >
//           <Text>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam saepe
//             natus voluptate qui nemo aliquid nostrum expedita laborum cupiditate
//             officiis amet, atque libero delectus maxime quisquam odio.
//             Voluptatibus, nesciunt expedita!{' '}
//           </Text>
//         </ScrollView>
//       </SafeAreaView>
//     </Fragment>
//   );
// };

export default App;
