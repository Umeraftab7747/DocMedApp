/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, TextInput, Platform} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Icon} from 'react-native-elements';
import {primaryColor} from '../Dimens';
export class AppInputField extends Component {
  render() {
    return (
      <View
        style={{
          // backgroundColor: '#a0a',
          width: '100%',
          alignItems: 'center',
        }}>
        <View
          style={{
            // backgroundColor: '#af1',
            width: '80%',
            justifyContent: 'center',
            flexDirection: 'row',
            borderColor: primaryColor,
            borderWidth: h('0.2%'),
            // borderWidth: Platform.OS === 'ios' ? h('0.05%') : null,
            borderRadius: h('1%'),
            marginBottom: h('1%'),
          }}>
          <View
            style={{
              width: '20%',
              // backgroundColor: 'blue',
              height: h('7%'),
              alignItems: 'center',
              justifyContent: 'center',
              borderRightWidth: h('0.2%'),
              borderColor: primaryColor,
              marginLeft: h('2%'),
            }}>
            <Icon
              name={this.props.icName}
              type={this.props.icType}
              color={primaryColor}
              size={h('3%')}
            />
          </View>
          <View
            style={{
              width: '85%',
              // backgroundColor: '#faf',
            }}>
            <TextInput
              {...this.props}
              style={{
                // backgroundColor: '#faf',
                height: h('7%'),
                width: '100%',
                color: '#000',
                fontSize: h('2%'),
                paddingLeft: h('2%'),
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
