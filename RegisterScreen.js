import * as React from 'react';
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {Dropdown} from 'react-native-element-dropdown';
import CheckBox from '@react-native-community/checkbox';

import {black} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const educations = [
  {label: 'Post-Gradute', value: 'Post-Gradute'},
  {label: 'Under-Graduate', value: 'Under-Graduate'},
  {label: 'Diploma', value: 'Diploma'},
  {label: 'Intermediate', value: 'Intermediate'},
  {label: 'High School', value: 'High School'},
];

const technolgyList = ['React Native', 'MERN', 'Front-end Developer'];

const RegisterScreen = ({navigation}) => {
  const [fullName, setFullName] = React.useState('');
  const [checked, setChecked] = React.useState('');
  const [education, setEducation] = React.useState('');
  const [technology, setTechnology] = React.useState([]);

  //const [date, setDate] = React.useState(new Date());
  const handleRegister = () => {
    navigation.navigate('HomeScreen', {
      fullName,
      checked,
      education,
      technology,
    });
  };

  return (
    <View style={styles.maincontainer}>
      <Text style={styles.heading}>Create an Account</Text>
      <Text style={styles.text}>Name:</Text>
      <TextInput
        style={styles.input}
        value={fullName}
        onChangeText={text => setFullName(text)}
        placeholder="Enter your Full Name"></TextInput>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.text}>Gender:</Text>
        <View style={{flexDirection: 'row'}}>
          <RadioButton
            value="First"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
          <Text style={styles.text}>Male</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
          <Text style={styles.text}>Female</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <RadioButton
            value="Third"
            status={checked === 'third' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('third')}
          />
          <Text style={styles.text}>Other</Text>
        </View>
      </View>
      {/* <Text style={styles.text}>DoB</Text> */}

      <View>
        <Dropdown
          style={styles.dropdown}
          data={educations}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Education"
          onChange={item => {
            setEducation(item.value);
          }}></Dropdown>
      </View>
      <Text style={[styles.text, {marginTop: '2%', marginBottom: '2%'}]}>
        Technolgy:
      </Text>
      {technolgyList.map((lang, index) => (
        <View key={index} style={styles.checkboxContainer}>
          <CheckBox
            value={technology.includes(lang)}
            onValueChange={() => {
              if (technology.includes(lang)) {
                setTechnology(technology.filter(item => item !== lang));
              } else {
                setTechnology([...technology, lang]);
              }
            }}
          />
          <Text style={styles.text}>{lang}</Text>
        </View>
      ))}
      <Pressable style={styles.button} onPress={handleRegister}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            padding: '5%',
            fontSize: 18,
            fontWeight: 500,
          }}>
          Register
        </Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    padding: '10%',
  },
  heading: {
    fontSize: 30,
    fontWeight: '700',
    width: '100%',
    color: 'darkblue',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    height: 50,
    width: '100%',
    margin: 10,
    borderWidth: 0.5,

    alignSelf: 'center',
  },
  text: {
    color: 'black',
    fontSize: 18,
    paddingTop: '1%',
  },
  dropdown: {
    height: 50,

    borderWidth: 0.5,
  },
  button: {
    backgroundColor: '#001965',
    borderRadius: 50,
    width: '35%',
    alignSelf: 'flex-end',
    marginTop: '5%',
    padding: '4%',
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  dobButton: {
    width: '75%',
    alignSelf: 'left',
  },
});
export default RegisterScreen;
