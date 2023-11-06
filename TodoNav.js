// import * as React from 'react';
// import {View, Text} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';

// function Feed() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Feed Screen</Text>
//     </View>
//   );
// }

// function Article() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Article Screen</Text>
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Article" component={Article} />
//     </Drawer.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyDrawer />
//     </NavigationContainer>
//   );
// }

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Parent from './Parent';
import Flex from './Assignment2';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button} from 'react-native/types';

// // const Stack = createNativeStackNavigator();

// // const App = () => {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator initialRouteName="Home">
// //         <Stack.Screen name="Flex" component={Flex} />
// //         <Stack.Screen name="Home" component={Parent} />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // };

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Parent} />
        <Drawer.Screen name="Flex" component={Flex} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;
