import React from 'react'
import {
    View,
    StyleSheet,
    Text,
} from 'react-native'

const ScrollListItem = ( {attributes} ) => {
    const { item, text } = styles;
    return (
        <View style={ item }>
            <Text style={text}>{attributes.id}</Text>
            <Text numberOfLines={1} ellipsizeMode={'tail'} style={text}>{attributes.title}</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    item: {
        width: 90,
        height: 40,
        borderColor: 'rgba(0,0,0,.3)',
        borderWidth: 1,
        backgroundColor: 'rgba(0,0,0,.05)'
    },
    text: {
        textAlign: 'center',
        width: 80,
    }
});

export default ScrollListItem