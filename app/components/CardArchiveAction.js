import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from "react-native";
import {FontAwesome5} from '@expo/vector-icons'
import colors from "../config/colors";

function CardArchiveAction({onArchive}) {
    return (
        <View style={styles.archiveContainer} >
            <TouchableWithoutFeedback onPress={onArchive}>
                <FontAwesome5 size={40} name={'archive'} color={colors.opposite}/>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    archiveContainer: {
        width: 70,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default CardArchiveAction;
