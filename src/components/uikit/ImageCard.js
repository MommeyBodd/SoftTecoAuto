import React from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import { h, w } from '../../../constats'

const ImageCard = ({ name, onPress })  => {
    const { container, cover, h1, sub } = styles;
    return (
        <TouchableOpacity onPress={ onPress }>
            <View style={ container }>
                <View style={ sub }>
                    <Image
                        style={ cover }
                        source={{uri: 'https://raw.githubusercontent.com/MommeyBodd/SoftTecoAuto/master/src/components/uikit/img/'+ name +'.png'}}/>
                </View>
                <Text style={ h1 }>{ name }</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        width: w / 2.1,
        paddingVertical: 10
    },
    sub: {
        padding: 10,
    },
    h1: {
        paddingTop: 10,
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