/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, TouchableOpacity, Platform, Text} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {secondaryColor, white} from '../Dimens';
export class Appbtn extends Component {
  render() {
    return (
      <View
        style={{
          // backgroundColor: '#aa4',
          width: '100%',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          {...this.props}
          style={{
            height: h('6%'),
            width: '60%',
            marginTop: h('1%'),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: h('1.5%'),
            backgroundColor: secondaryColor,
          }}>
          <Text
            style={{
              fontSize: h('2.5%'),
              color: white,
            }}>
            {this.props.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
