import React from 'react'
import {View, Image, StyleSheet, Animated} from 'react-native'
import {w, h} from '../../../constats'

const DetailImageCard = ({name, fadeAnim}) => {
    const {container, cover} = styles;
    return (
        <View style={container}>
            <Animated.View style={{opacity: fadeAnim}}>
                <Image style={cover}
                       source={{uri: 'https://raw.githubusercontent.com/MommeyBodd/SoftTecoAuto/master/src/components/uikit/img/' + name + '.png'}}/>
            </Animated.View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 3,
        alignItems: 'center',
        borderBottomColor: 'rgba(0,0,0,.6)',
        borderBottomWidth: 1,
        backgroundColor: 'rgba(0,0,0,.1)'

    },
    cover: {
        width: w * 0.7,
        height: h * 0.6,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10
    }
});

export default DetailImageCard