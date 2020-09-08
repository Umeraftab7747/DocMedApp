/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, TouchableOpacity, Platform, Text} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {secondaryColor, white, primaryColor} from '../Dimens';
import Ionicons from 'react-native-vector-icons/Ionicons';

export class Navheader extends Component {
  render() {
    return (
      <View
        style={{
          // backgroundColor: '#aa4',
          width: '100%',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: primaryColor,
            width: '100%',
            height: h('6.7%'),
            flexDirection: 'row',
          }}>
          <View
            style={{
              //   backgroundColor: 'red',
              height: '100%',
              width: '15%',
            }}>
            {this.props.LeftIcon ? (
              <TouchableOpacity
                onPress={this.props.Onpress}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                }}>
                <Ionicons
                  name={this.props.icLeft}
                  color={'#fff'}
                  size={h('4%')}
                />
              </TouchableOpacity>
            ) : null}
          </View>
          <View
            style={{
              //   backgroundColor: 'green',
              height: '100%',
              width: '70%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{color: 'white', fontSize: h('2.5%'), fontWeight: 'bold'}}>
              {this.props.title}
            </Text>
          </View>
          <View
            style={{
              //   backgroundColor: 'red',
              height: '100%',
              width: '15%',
            }}>
            {this.props.RightIcon ? (
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                }}>
                <Ionicons
                  name={this.props.icRight}
                  color={'#fff'}
                  size={h('4%')}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </View>
    );
  }
}
