import React from 'react';
import {StyleSheet, Text, View, TouchableNativeFeedback} from "react-native";

import colors from "../config/colors";
import {AntDesign} from '@expo/vector-icons'


function IconButton({title, onPress, icon}) {
    return (
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(colors.primary, true, 65)}
                                  onPress={onPress}>
            <View style={styles.Button}>
                <AntDesign name={icon} size={22} color={colors.primary}/>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
    Button: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        backgroundColor: colors.white,
        borderRadius: 30,
    },
    buttonText: {
        fontSize: 12,
        color: colors.black
    },
})

export default IconButton;
