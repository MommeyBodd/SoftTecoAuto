import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

const DetailLayout = props => {
    const { container }  = styles;
    return (
        <View style={container}>
            {props.children}
        </View>
    )
};

const styles = StyleSheet.create({
   container: {
       flex: 1,
   }
});

export default DetailLayout