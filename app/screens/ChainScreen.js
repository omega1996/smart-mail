import React from 'react';
import {StyleSheet, View, Text} from "react-native";

function ChainScreen({route}) {
    console.log(Object.keys(route.params.chain))
    return (
        <View style={styles.chainBackground}>
            <Text>{route.params.chain.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    chainBackground: {
        flex: 1,
        backgroundColor: "lightgrey"
    }

});

export default ChainScreen;
