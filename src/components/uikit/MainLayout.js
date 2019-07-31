import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'

const Layout = props => {
    const { container } = styles;
    return (
        <ScrollView>
            <View style={container}>
                {props.children}
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexShrink: 2,
        justifyContent: 'space-around',
        marginBottom: 150
    }
});

export default Layout