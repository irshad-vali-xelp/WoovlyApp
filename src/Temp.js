import React, { Component } from 'react'

import {
    View,
    WebView,
    StyleSheet
} from 'react-native'
const Temp = () => {
    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: 'https://alpha.woovly.com' }}
            />
        </View>
    )
}
Temp.navigationOptions = {
    title: "",
};
export default Temp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    }
})