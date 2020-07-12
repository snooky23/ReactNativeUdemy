import React from 'react';
import { Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
    const myStr = 'This is my first comp!'
    return <Text style={styles.textStyle}>{myStr}</Text>;
};

const styles = StyleSheet.create ({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen;