import React from 'react';
import {StyleSheet, View, Text, Image, TouchableNativeFeedback} from "react-native";
import colors from "../config/colors";
import {AntDesign} from "@expo/vector-icons";

function Card({title, subtitle, name, time, text, type, avatar, hasFiles, onPress}) {
    return (
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(colors.primary, true, 200)}
                                 onPress={onPress}>
            <View style={styles.card}>

                <Text style={styles.about}> {name} - {new Date(time).toLocaleDateString()}</Text>
                <View style={styles.detailsContainer}>
                    <Text style={styles.title} numberOfLines={1}>{title}</Text>
                    {/*<Text style={styles.subTitle}>{subtitle}</Text>*/}
                    {/*<Image source={avatar} style={styles.avatar}/>*/}
                </View>
                <View style={styles.preview}>
                    <Text style={styles.previewText} numberOfLines={5}>{text}</Text>
                </View>
                {hasFiles && <AntDesign style={styles.attach} name="paperclip" size={22} color={colors.primary}/>}
            </View>
        </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        margin: 10,
        overflow: "hidden",
    },
    attach: {
        position: "absolute",
        right: 5,
        bottom: 5
    },
    preview: {
        backgroundColor: "lightblue",
        height: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    previewText: {
        padding: 10
    },
    about: {
        margin: 5,
    },
    detailsContainer: {
        padding: 10
    },
    avatar: {
        position: "absolute",
        borderRadius: 25,
        width: 50,
        height: 50,
        right: 10,
        top: -20
    },
    title: {
        marginBottom: 7,
        fontSize: 32,
        color: colors.primary,
        fontWeight: "bold"
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold"
    }
});

export default Card;
