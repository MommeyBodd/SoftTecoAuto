import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { w } from '../../../constats'

const DetailImageCard = ({ name })  => {
    const { container, cover, sub } = styles;
    return (
        <View style={container}>
            <View style={sub}>
                <Image style={cover} source={{uri: 'https://raw.githubusercontent.com/MommeyBodd/SoftTecoAuto/master/src/components/uikit/img/'+ name +'.png'}}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: w / 2.1,
        paddingVertical: 10
    },
    sub: {
        flex: 3,
        padding: 10,
    },
    cover: {
        width: w/ 2.4,
        height: w * 0.63,
        borderRadius: 10,
    }
});

export default DetailImageCard