/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Navheader} from '../../component';
import {primaryColor} from '../../Dimens';

export class DoctorScreen extends Component {
  state = {
    DATA: [
      {
        name: 'Joan Diza',
        work: 'Medical Specilist',
        address: 'xyz local town shop 28',
        img: require('../../assets/1.jpg'),
      },
      {
        name: 'Alice Cook',
        work: 'Medical Specilist',
        address: 'xyz local town shop 24',
        img: require('../../assets/2.jpg'),
      },
      {
        name: 'Richard Nelson',
        work: 'Medical Specilist',
        address: 'xyz local town shop 22',
        img: require('../../assets/3.jpg'),
      },
      {
        name: 'Diana Jackson',
        work: 'Medical Specilist',
        address: 'xyz local town shop 18',
        img: require('../../assets/4.jpeg'),
      },
    ],
  };

  renderItem = (item) => {
    return (
      <TouchableOpacity style={styles.falt}>
        <View style={styles.img}>
          <View style={styles.imgContainer}>
            <Image source={item.img} style={styles.images} />
          </View>
        </View>
        <View style={styles.txte}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.work}>{item.work}</Text>
          <Text style={styles.address}>{item.address}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Navheader title={'ALL DOCTOR'} />
        <Text style={styles.txt}>Select your doctor from list</Text>
        <FlatList
          data={this.state.DATA}
          renderItem={({item}) => this.renderItem(item)}
          keyExtractor={(item) => item.name}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  txt: {
    color: primaryColor,
    marginTop: h('1.9%'),
    fontSize: h('2.3%'),
    fontWeight: '900',
  },
  falt: {
    // backgroundColor: 'tomato',
    margin: h('1%'),
    width: h('55%'),
    height: h('20%'),
    borderLeftColor: 'rgba(0,0,0,0.1)',
    borderLeftWidth: h('0.2%'),
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: h('0.2%'),
    borderRightColor: 'rgba(0,0,0,0.1)',
    borderRightWidth: h('0.1%'),
    flexDirection: 'row',
  },
  img: {
    // backgroundColor: 'black',
    width: '35%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    backgroundColor: primaryColor,
    width: '66%',
    height: '66%',
    borderRadius: h('15%'),
  },
  txte: {
    // backgroundColor: 'red',
    width: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  name: {
    color: 'black',
    fontSize: h('3%'),
    fontWeight: 'bold',
    margin: h('0.1%'),
  },
  work: {
    color: 'grey',
    fontSize: h('2%'),
    margin: h('0.1%'),
  },
  address: {
    color: 'grey',
    fontSize: h('2%'),
    margin: h('0.1%'),
  },
  images: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: h('10%'),
  },
});
