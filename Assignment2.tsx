import React from 'react';
import {View, StyleSheet} from 'react-native';
function App() {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.container1}>
        <View style={styles.container11}></View>
        <View style={styles.container12}></View>
        <View style={styles.container13}></View>
        <View style={styles.container14}></View>
      </View>
      <View style={styles.container2}>
        <View style={styles.container21}></View>
        <View style={styles.container22}></View>
        <View style={styles.container23}></View>
      </View>
      <View style={styles.container3}>
        <View style={styles.container31}></View>
        <View style={styles.container32}></View>
        <View style={styles.container33}></View>
      </View>
      <View style={styles.container4}></View>
      <View style={styles.container5}></View>
      <View style={styles.container6}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'yellow',
    padding: 5,
    flex: 1,
    rowGap: 5,
    justifyContent: 'space-around',
  },
  container1: {
    flex: 0.1,
    flexDirection: 'row',
    columnGap: 6,
    paddingRight: '5%',
  },
  container11: {
    backgroundColor: 'red',
    height: '100%',
    width: '25%',
    borderRadius: 10,
  },
  container12: {
    backgroundColor: 'red',
    height: '100%',
    width: '25%',
    borderRadius: 10,
  },
  container13: {
    backgroundColor: 'red',
    height: '100%',
    width: '25%',
    borderRadius: 10,
  },
  container14: {
    backgroundColor: 'red',
    height: '100%',
    width: '25%',
    borderRadius: 10,
  },

  container2: {
    flex: 0.1,
    flexDirection: 'row',
    columnGap: 6,
    paddingRight: '3%',
  },
  container21: {
    backgroundColor: 'red',
    height: '100%',
    width: '50%',
    borderRadius: 10,
  },
  container22: {
    backgroundColor: 'yellow',
    height: '100%',
    width: '25%',
    borderRadius: 10,
  },
  container23: {
    backgroundColor: 'red',
    height: '100%',
    width: '25%',
    borderRadius: 10,
  },

  container3: {
    flex: 0.1,
    flexDirection: 'row',
    columnGap: 6,
    paddingRight: '3%',
  },
  container31: {
    backgroundColor: 'yellow',
    height: '100%',
    width: '25%',
    borderRadius: 10,
  },
  container32: {
    backgroundColor: 'red',
    height: '100%',
    width: '50%',
    borderRadius: 10,
  },
  container33: {
    backgroundColor: 'red',
    height: '100%',
    width: '25%',
    borderRadius: 10,
  },
  container4: {
    flex: 0.3,
    height: '100%',
    width: '100%',
    backgroundColor: 'red',
    borderRadius: 10,
  },
  container5: {
    flex: 0.25,
    height: '100%',
    width: '100%',
    backgroundColor: 'red',
    borderRadius: 10,
  },
  container6: {
    flex: 0.15,
    height: '100%',
    width: '100%',
    backgroundColor: 'red',
    borderRadius: 10,
  },
});
export default App;
