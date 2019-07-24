//import
import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
//body

const Header = props  => {
    const { viewStyle, textStyle} = styles
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#4169E1',
        height: 100,
        justifyContent: 'center',
        paddingLeft: 20,
        paddingTop: 50,
    },
    textStyle: {
        color: '#fff',
        fontSize: 28,
        paddingBottom: 20,
        fontFamily: 'AvenirNext-DemiBold'
    }
})
//export
export default Header