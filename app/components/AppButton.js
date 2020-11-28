import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";

import colors from "../config/colors";

function AppButton({title, onPress}) {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.Button} onPress={onPress}>
                <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    Button: {
        height: 60,
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        backgroundColor: colors.primary,
        borderRadius: 30,
    },
    buttonText: {
        fontSize: 24,
        textTransform: "uppercase",
        color: colors.neutral
    },
})

export default AppButton;
