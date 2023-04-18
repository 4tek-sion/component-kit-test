import React from 'react';
import {StyleSheet, View} from "react-native";
import { V99Button } from 'react-native-v99-component-kit';

export const TestView = ()=>{
    return <View style={styles.container}>
        <V99Button text={'DEMO'}></V99Button>
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
});
