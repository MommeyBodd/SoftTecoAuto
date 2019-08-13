import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { h } from '../../../constats'

const Header = ({ title, detail, onPress, leftIcon, leftColor })  => {
    const { viewStyle, textStyle, leftButtonStyle} = styles;
    return (
        <View style={viewStyle}>
            <TouchableOpacity onPress={onPress}>
                <Ionicons name={leftIcon} style={[leftButtonStyle, {paddingLeft: detail ? 20 : 20}] } color={leftColor}/>
            </TouchableOpacity>
            <Text style={[textStyle, {paddingLeft: leftIcon ? 10: 0}]}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4169E1',
        height: h * 0.1,
    },
    textStyle: {
        color: '#fff',
        fontSize: 35,
    },
    leftButtonStyle: {
        fontSize: 45
    }
});

export default Header