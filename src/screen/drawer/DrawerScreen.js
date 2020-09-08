/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import {heightPercentageToDP as h} from 'react-native-responsive-screen';
import {primaryColor} from '../../Dimens';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';

export class DrawerScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <View style={styles.name}>
          <View style={styles.leftc}>
            <View style={styles.imgC}>
              <Image
                source={require('../../assets/dicon.jpg')}
                style={styles.img}
              />
            </View>
          </View>
          <View style={styles.leftr}>
            <Text style={styles.ntxt}>Name</Text>
            <Text style={styles.dtxt}>live in xyz road in Pakistan</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('DoctorScreen');
          }}
          style={[styles.ItemView, {marginTop: h('1%')}]}>
          <View style={styles.iconContainer}>
            <Icon
              name={'doctor'}
              type={'material-community'}
              color={primaryColor}
              size={h('5%')}
            />
          </View>

          <View style={styles.txtContainer}>
            <Text style={styles.txt}>Doctors</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ItemView}>
          <View style={styles.iconContainer}>
            <Icon
              name={'account-key'}
              type={'material-community'}
              color={primaryColor}
              size={h('5%')}
              style={{marginRight: '20%'}}
            />
          </View>
          <View style={styles.txtContainer}>
            <Text style={styles.txt}>Reset Password</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ItemView}>
          <View style={styles.iconContainer}>
            <Icon
              name={'file-account'}
              type={'material-community'}
              color={primaryColor}
              size={h('5%')}
            />
          </View>
          <View style={styles.txtContainer}>
            <Text style={styles.txt}>Terms</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.ItemView,
            {
              marginTop: h('45.3%'),
              borderWidth: h('0.05'),
            },
          ]}>
          <Text
            style={[styles.txt, {marginRight: h('5%'), fontWeight: 'bold'}]}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ItemView: {
    height: h('8%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: h('0.05%'),
    borderColor: primaryColor,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  txt: {
    fontSize: h('3%'),
    marginLeft: h('5%'),
    color: primaryColor,
    // backgroundColor: 'green',
  },
  name: {
    height: h('18%'),

    borderBottomWidth: h('0.05%'),
    backgroundColor: primaryColor,
    flexDirection: 'row',
  },
  ntxt: {
    fontSize: h('3%'),
    color: '#fff',
    marginTop: h('6%'),
    marginRight: h('12%'),
    fontWeight: 'bold',
  },
  leftc: {
    // backgroundColor: 'yellow',
    width: h('20%'),
    height: h('18%'),
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: h('10%'),
    // borderRightColor: 'rgba(0,0,0,0.5)',
    // borderRightWidth: h('0.05%'),
  },
  leftr: {
    // backgroundColor: 'red',
    width: h('20%'),
    height: h('18%'),
    alignItems: 'center',
    marginLeft: h('1%'),
  },
  dtxt: {fontSize: h('2%'), color: '#fff7', marginLeft: h('0.5%')},
  img: {
    resizeMode: 'center',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    borderRadius: h('10%'),
  },
  imgC: {
    backgroundColor: 'white',
    width: '60%',
    height: '66%',
    borderRadius: h('20%'),
  },
  txtContainer: {
    // backgroundColor: 'green',
    width: '80%',
    height: '100%',
    justifyContent: 'center',
  },
  iconContainer: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    // backgroundColor: 'red',
    alignItems: 'center',
  },
});
