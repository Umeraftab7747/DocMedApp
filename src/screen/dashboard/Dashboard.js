/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Appbtn, AppInputField, Navheader} from '../../component';
import {primaryColor, silver, secondaryColor} from '../../Dimens';

// images
const doctor = require('../../assets/allAppointments.png');
const Appoinment = require('../../assets/getAppointment.png');
const Waiting = require('../../assets/waitingRoom.png');
export class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navheader
          LeftIcon
          icLeft={'settings-outline'}
          Onpress={() => this.props.navigation.openDrawer()}
          title={'DASHBOARD'}
        />
        <View style={styles.MainContainer}>
          <TouchableOpacity style={[styles.box, {marginTop: h('3%')}]}>
            <Image source={doctor} style={styles.img} />
            <Text style={styles.txt}>Get Doctor Appoinment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
            <Image source={Appoinment} style={styles.img} />
            <Text style={styles.txt}>All Appoinments</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
            <Image source={Waiting} style={styles.img} />
            <Text style={styles.txt}>Wating Room</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },
  MainContainer: {flex: 1, alignItems: 'center'},
  box: {
    backgroundColor: '#fff',
    width: h('50%'),
    height: h('20%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: h('1%'),
    borderColor: primaryColor,
    borderWidth: h('0.1%'),
    marginTop: h('1%'),
  },
  txt: {
    // backgroundColor: 'red',
    fontSize: h('2%'),
    marginTop: h('1%'),
  },
  img: {
    width: '21%',
    height: h('9%'),
    resizeMode: 'contain',
  },
});
