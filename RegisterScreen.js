import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {Dropdown} from 'react-native-element-dropdown';
import CheckBox from '@react-native-community/checkbox';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

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
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState('Select');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    const dob = new Date(date);
    const splitTime = dob.toISOString().split('T');
    const splitdate = splitTime[0].split('-');
    //console.log(splitdate[2] + '/' + splitdate[1] + '/' + splitdate[0]);
    setSelectedDate(splitdate[2] + '/' + splitdate[1] + '/' + splitdate[0]);
    hideDatePicker();
  };

  //const [date, setDate] = React.useState(new Date());
  const handleRegister = () => {
    navigation.navigate('HomeScreen', {
      fullName,
      checked,
      education,
      technology,
      selectedDate,
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
            value=" Male"
            status={checked === 'Male' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Male')}
          />
          <Text style={styles.text}>Male</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <RadioButton
            value="Female"
            status={checked === 'Female' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Female')}
          />
          <Text style={styles.text}>Female</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <RadioButton
            value="Other"
            status={checked === 'Other' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Other')}
          />
          <Text style={styles.text}>Other</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.text}>DoB:</Text>
        <TouchableOpacity onPress={showDatePicker} style={styles.dobButton}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',

              fontSize: 18,
              fontWeight: 400,
            }}>
            {selectedDate}
          </Text>
        </TouchableOpacity>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>

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
            padding: '3%',
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
    backgroundColor: 'darkblue',
    borderRadius: 50,
    marginRight: '15%',
    padding: '3%',
    marginBottom: '5%',
    marginLeft: '15%',
  },
});
export default RegisterScreen;
