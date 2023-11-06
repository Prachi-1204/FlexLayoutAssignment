import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DateOfBirth = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Select Date Of Birth');

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

  return (
    <View style={{paddingBottom: '5%'}}>
      <TouchableOpacity onPress={showDatePicker} style={styles.dobButton}>
        <Text
          style={{
            color: 'black',

            fontSize: 18,
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
  );
};

const styles = StyleSheet.create({
  dobButton: {
    width: '75%',
    alignSelf: 'left',
  },
});

export default DateOfBirth;
