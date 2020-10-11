import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child #1</Text>
        <Text style={styles.textTwoStyle}>Child #2</Text>
        <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        alignItems: 'center'
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        alignSelf: 'flex-end'
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
    }
});

export default BoxScreen;

7181cf71aa5e272a2f71a06f48a2461c7f7c6e0d82258712a84a45bdeab26e07
2fb49d049857e18dc7063ce31908f6e2662b3c0a5bccd7bc2c7db57ae3746133