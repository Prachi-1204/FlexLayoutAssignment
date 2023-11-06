import * as React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RegisterScreen from './RegisterScreen';

const HomeScreen = ({route}) => {
  const {fullName, checked, education, technology, selectedDate} = route.params;

  return (
    <View style={styles.main}>
      <Text style={styles.text}>Name : {fullName}</Text>
      <Text style={styles.text}>Gender : {checked}</Text>
      <Text style={styles.text}>DoB : {selectedDate}</Text>
      <Text style={styles.text}>Educational Level : {education}</Text>
      <Text style={styles.text}>Technologies : {technology}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: '10%',
    backgroundColor: 'powderblue',
  },
  text: {
    color: 'darkblue',
    fontSize: 18,
    paddingTop: '1%',
  },
});
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{title: 'Registration Form'}}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
