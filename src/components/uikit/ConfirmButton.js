import React from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Animated
} from "react-native";

const ConfirmButton = ({ fadeAnimButton, onPress }) => {
    const {
        buttonStyle,
        textStyle,
        buttonContainer
    } = styles;
    return (

        <Animated.View style={{flex: 0.4, opacity: fadeAnimButton}}>
            <TouchableOpacity onPress={ onPress } style={ buttonContainer }>
                <View style={ buttonStyle }>
                    <Text style={ textStyle }>Confirm</Text>
                </View>
            </TouchableOpacity>
        </Animated.View>
    )
};

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1
    },
    buttonStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
        marginRight: 40,
        marginLeft: 40,
        borderRadius: 25,
        backgroundColor: '#4169E1'
    },
    textStyle: {
        fontSize: 35,
        color: '#fff',
    }
});

export default ConfirmButton