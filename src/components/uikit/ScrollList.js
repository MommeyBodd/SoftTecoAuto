import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import Swiper from 'react-native-swiper';

const ScrollList = props => {

    const {
        paginationStyleDots,
        paginationPos,
        scrollListContainer,
        swiperContainer
    } = styles;

    return (
        <View style={ scrollListContainer }>
            <View style={swiperContainer}>
                <Swiper
                    loop={false}
                    paginationStyle={paginationPos}
                    activeDot={<View style={paginationStyleDots}/>}
                >
                    { props.children }
                </Swiper>
            </View>
        </View>
    );
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
    },
    paginationPos: {
        bottom: 5
    },
    paginationStyleDots: {
        backgroundColor: 'rgba(0,0,0,.4)',
        width: 10,
        height: 10,
        borderRadius: 6,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    scrollListContainer: {
        flex: 0.8
    },
    swiperContainer: {
        flex: 1,
        borderBottomColor: 'rgba(0,0,0,.4)',
        borderBottomWidth: 1
    }
});

export default ScrollList