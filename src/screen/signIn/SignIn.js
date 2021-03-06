/* eslint-disable handle-callback-err */
/* eslint-disable eqeqeq */
/* eslint-disable no-alert */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Appbtn, AppInputField} from '../../component';
import {primaryColor, silver, secondaryColor} from '../../Dimens';
import {TouchableOpacity} from 'react-native-gesture-handler';
var validator = require('email-validator');
import AsyncStorage from '@react-native-community/async-storage';

export class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };
  componentDidMount = () => {
    AsyncStorage.getItem('userData', (error, data) => {
      const userData = JSON.parse(data);
      if (userData !== null) {
        this.setState({
          email: userData.email,
          password: userData.password,
        });
        // console.warn(userData.email);
      } else {
        console.warn('No data found');
      }
    });
  };

  validate = () => {
    const {email, password} = this.state;
    const check = validator.validate(email);
    if (check) {
      AsyncStorage.getItem('userData', (err, data) => {
        const userData = JSON.parse(data);
        if (password === userData.password) {
          this.props.navigation.navigate('TabNavigation');
        } else {
          alert('Your password is InCorrect');
        }
      });
    } else {
      alert('Email is Invalid');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topbg}></View>
        <View style={styles.lowbg}></View>
        <View style={styles.contentView}>
          <View style={styles.topUserVIew}>
            <Text style={styles.sign}>Sign in</Text>
            <Text style={styles.lowsign}>Signin Your account</Text>
          </View>
          <View style={styles.lowUserView}>
            <View style={styles.imgView}>
              <Image
                source={require('../../assets/ic.png')}
                style={styles.img}
              />
            </View>
            <View style={styles.fileds}>
              <AppInputField
                icName={'ios-mail'}
                icType={'ionicon'}
                placeholder={'Email'}
                onChangeText={(email) => {
                  this.setState({email});
                }}
                value={this.state.email}
              />
              <AppInputField
                icName={'md-key'}
                icType={'ionicon'}
                placeholder={'Password'}
                secureTextEntry
                onChangeText={(password) => {
                  this.setState({password});
                }}
              />
              <Text style={styles.ForgotTXT}>Forgot Password ?</Text>
              <Appbtn title={'Sign In'} onPress={() => this.validate()} />

              <View style={styles.lowerTxt}>
                <View style={styles.account}>
                  <Text>Don't you have an Account ?</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('SignUp');
                  }}
                  style={styles.SingupView}>
                  <Text style={styles.SignupTxt}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
  },
  txt1: {
    color: 'tomato',
    fontSize: 40,
  },
  topbg: {
    backgroundColor: primaryColor,
    width: '100%',
    height: h('35%'),
  },
  lowbg: {
    backgroundColor: silver,
    width: '100%',
    height: h('62%'),
  },
  sign: {
    color: 'white',
    fontSize: h('3%'),
    fontWeight: 'bold',
  },
  contentView: {
    // backgroundColor: '#faf',
    height: h('75%'),
    width: '80%',
    marginTop: -h('90%'),
  },
  topUserVIew: {
    width: '100%',
    height: h('10%'),
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowsign: {
    color: 'white',
    fontSize: h('2%'),
  },
  lowUserView: {
    backgroundColor: 'white',
    width: '100%',
    height: h('70%'),
    borderRadius: h('2%'),
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: h('0.1%'),
  },
  fileds: {
    marginTop: h('4%'),
  },
  imgView: {
    height: h('15%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  ForgotTXT: {
    marginLeft: h('5.5%'),
    marginTop: h('1%'),
    marginBottom: h('3%'),
  },
  lowerTxt: {
    marginTop: h('1%'),
    // backgroundColor: 'tomato',
    width: '100%',
    height: h('9%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  account: {
    // backgroundColor: 'dodgerblue',
    width: '53%',
    height: h('5%'),
    justifyContent: 'center',
  },
  SingupView: {
    // backgroundColor: 'green',
    width: h('10%'),
    height: h('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  SignupTxt: {
    color: primaryColor,
  },
});
