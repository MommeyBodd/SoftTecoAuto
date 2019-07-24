import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { h, w } from '../../../constats'

const ImageCard = props => {
    const { container, cover, h1, sub } = styles;
    console.log('image', props.image);
    const imgName = props.image;
    return (
        <View style={container}>
            <View style={sub}>
                <Image style={cover} source={require(imgName)}/>
            </View>
            <Text style={ h1 }>{ name }</Text>
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        width: w / 2
    },
    sub: {
        padding: 10,
    },
    h1: {
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
        width: w / 2.4
    },
    cover: {
        width: w/ 2.4,
        height: w * 0.63,
        borderRadius: 10,
    }
});

export default ImageCard