import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

const ScrollListPage = props => {
    const { slide } = styles;
    return (
        <View style={slide}>
            {props.children}
        </View>

    )
};

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        paddingBottom: 25,
        alignContent: 'space-around',
        justifyContent: 'space-around',
    }
});

export default ScrollListPage