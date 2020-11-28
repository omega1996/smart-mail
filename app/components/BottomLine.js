import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

import colors from "../config/colors";
import IconButton from "./IconButton";

function BottomLine({title, onPress}) {
    return (
        <View style={styles.bottomButtons}>
            <IconButton icon="download" title="Лента"/>
            <IconButton icon="mail" title="Новое письмо"/>
            <IconButton icon="setting" title="Настройки"/>
        </View>
    );
}

const styles = StyleSheet.create({
    bottomButtons: {
        height: 60,
        flexDirection: "row",
        backgroundColor: 'white',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 5,
    }
})

export default BottomLine;
