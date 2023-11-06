/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
/*
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
*/
import {
  Image,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Text,
  Alert,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App() {
  const [number, onChangeNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisisble] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisisble(!isPasswordVisible);
  };
  const manageLogin = () => {
    console.log(Alert.alert('Email : ' + number + '\nPassword : ' + password));
  };
  return (
    <SafeAreaView style={{backgroundColor: 'white', padding: 20}}>
      {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{}}>
          <Text>10:00</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{
              width: 16,
              height: 16,
              resizeMode: 'contain',
            }}
            source={require('./images/signal.png')}></Image>
          <Image
            style={{
              width: 16,
              height: 16,
              resizeMode: 'contain',
            }}
            source={require('./images/wifi.png')}></Image>
          <Image
            style={{
              width: 16,
              height: 16,
              resizeMode: 'contain',
            }}
            source={require('./images/battery.png')}></Image>
        </View>
      </View> */}
      <View>
        <Text
          style={{
            color: '#001965',
            textAlign: 'center',
            fontFamily: 'Poppins',
            fontWeight: '700',
            fontSize: 35,
            paddingBottom: '30%',
            paddingTop: '10%',
          }}>
          BIOHACKER
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: '#001965',
            textAlign: 'center',
            fontFamily: 'Poppins',
            fontWeight: '300',
            fontSize: 40,
            paddingBottom: '5%',
          }}>
          Login
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: '#484848',
            textAlign: 'center',
            fontFamily: 'Poppins',
            fontWeight: '300',
            fontSize: 14,
            paddingBottom: '5%',
          }}>
          Login To Your Account
        </Text>
      </View>
      <View style={{gap: 10}}>
        <View style={{backgroundColor: '#F5F5F5', borderRadius: 50}}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Enter your email"
          />
        </View>
        <View
          style={{
            //  backgroundColor: 'red',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#F5F5F5',
            borderRadius: 50,
          }}>
          <TextInput
            style={[styles.input, {flex: 0.9}]}
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder="Password"
            secureTextEntry={isPasswordVisible}
          />
          <TouchableOpacity
            style={styles.togglePasswordVisibility}
            onPress={togglePasswordVisibility}>
            <Image
              source={
                isPasswordVisible
                  ? require('./images/eye.png')
                  : require('./images/openeye.png')
              }
              style={styles.icon}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{alignSelf: 'flex-end'}}>
        <Text
          style={{
            color: '#556B2F',
            fontFamily: 'Poppins',
            fontWeight: '600',
            fontSize: 13,
            paddingBottom: '35%',
          }}>
          Forgot Password?
        </Text>
      </View>
      <Pressable style={styles.button} onPress={manageLogin}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            padding: '3%',
            fontSize: 25,
          }}>
          Login
        </Text>
      </Pressable>

      <View>
        <Text
          style={{
            color: '#001965',
            textAlign: 'center',
            fontFamily: 'Poppins',
            fontWeight: '400',
            fontSize: 14,
            paddingTop: '20%',
          }}>
          If you don’t have an account?
          <Text style={{color: '#4FA8D8'}}>Sign up</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '100%',
    // width: 340,
    margin: 10,
    borderWidth: 0,
    padding: 10,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#001965',
    borderRadius: 50,
  },
  togglePasswordVisibility: {
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

//input box
/*const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
*/

//internal style
/*return (
    <View style={styles.maincontainer}>
      <View style={styles.container1}></View>
      <View style={styles.container2}>
        <View style={styles.container21}></View>
        <View style={styles.container22}></View>
      </View>
      <View style={styles.container3}>
        <View style={styles.container31}></View>
        <View style={styles.container32}></View>
        <View style={styles.container33}></View>
      </View>
      <View style={styles.container4}>
        <View style={styles.container41}></View>
        <View style={styles.container42}></View>
      </View>
      <View style={styles.container5}>
        <View style={styles.container51}></View>
        <View style={styles.container52}></View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'powderblue',
    flex: 1,
    justifyContent: 'space-between',
  },
  container1: {
    backgroundColor: 'steelblue',
    alignSelf: 'center',
    width: 100,
    height: 100,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container21: {
    width: 100,
    height: 100,
    backgroundColor: 'steelblue',
  },
  container22: {
    width: 100,
    height: 100,
    backgroundColor: 'steelblue',
  },
  container3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container31: {
    width: 100,
    height: 100,
    backgroundColor: 'steelblue',
  },
  container32: {
    width: 100,
    height: 100,
    backgroundColor: 'steelblue',
  },
  container33: {
    width: 100,
    height: 100,
    backgroundColor: 'steelblue',
  },
  container4: {
    flexDirection: 'row',
    gap: 55,
    alignSelf: 'flex-end',
  },
  container41: {
    width: 100,
    height: 100,
    backgroundColor: 'steelblue',
  },
  container42: {
    width: 100,
    height: 100,
    backgroundColor: 'steelblue',
  },
  container5: {
    flexDirection: 'row',
    gap: 55,
  },
  container51: {
    width: 100,
    height: 100,
    backgroundColor: 'steelblue',
  },
  container52: {
    width: 100,
    height: 100,
    backgroundColor: 'steelblue',
  },
});
*/
//inline style
// function App() {
//   return (
//     <View
//       style={{
//         backgroundColor: 'powderblue',
//         flex: 1,
//         justifyContent: 'space-between',
//       }}>
//       <View
//         style={{
//           backgroundColor: 'steelblue',
//           alignSelf: 'center',
//           width: 100,
//           height: 100,
//         }}>
//         <Image
//           style={{
//             alignSelf: 'center',
//             width: '100%',
//             height: '100%',
//             resizeMode: 'center',
//           }}
//           source={require('./images/download.png')}></Image>
//       </View>
//       <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//         <View
//           style={{
//             width: 100,
//             height: 100,
//             backgroundColor: 'steelblue',
//           }}></View>
//         <View
//           style={{
//             width: 100,
//             height: 100,
//             backgroundColor: 'steelblue',
//           }}></View>
//       </View>
//       <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//         <View
//           style={{
//             width: 100,
//             height: 100,
//             backgroundColor: 'steelblue',
//           }}></View>
//         <View
//           style={{
//             width: 100,
//             height: 100,
//             backgroundColor: 'steelblue',
//           }}></View>
//         <View
//           style={{
//             width: 100,
//             height: 100,
//             backgroundColor: 'steelblue',
//           }}></View>
//       </View>
//       <View style={{flexDirection: 'row', gap: 55, alignSelf: 'flex-end'}}>
//         <View
//           style={{
//             width: 100,
//             height: 100,
//             backgroundColor: 'steelblue',
//           }}></View>
//         <View
//           style={{
//             width: 100,
//             height: 100,
//             backgroundColor: 'steelblue',
//           }}></View>
//       </View>
//       <View
//         style={{
//           flexDirection: 'row',

//           gap: 55,
//         }}>
//         <View
//           style={{
//             width: 100,
//             height: 100,
//             backgroundColor: 'steelblue',
//           }}></View>
//         <View
//           style={{
//             width: 100,
//             height: 100,
//             backgroundColor: 'steelblue',
//           }}></View>
//       </View>
//     </View>
//   );
// }

export default App;
