import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Header = ({ title, detail, onPress, leftIcon, leftColor })  => {
    const { viewStyle, textStyle, leftButtonStyle} = styles;
    return (
        <View style={viewStyle}>
            <TouchableOpacity onPress={onPress}>
                <Ionicons name={leftIcon} style={[leftButtonStyle, {paddingLeft: detail ? 10 : 20}] } color={leftColor}/>
            </TouchableOpacity>
            <Text style={[textStyle, {paddingLeft: leftIcon ? 10: 0}]}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        backgroundColor: '#4169E1',
        height: 100,
        paddingLeft: 20,
        paddingTop: 50,
    },
    textStyle: {
        color: '#fff',
        fontSize: 28,
        paddingBottom: 20
    },
    leftButtonStyle: {

        fontSize: 35
    }
});

export default Header