import React from 'react';
import {StyleSheet, View, Text, Image, TouchableNativeFeedback} from "react-native";
import colors from "../config/colors";
import {AntDesign} from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable"

function Card({title, subtitle, id, name, time, text, type, avatar,more, hasFiles, onPress, renderRightActions, renderLeftActions}) {

    return (
        <Swipeable renderRightActions={renderRightActions} renderLeftActions={renderLeftActions}>
            <View style={styles.card}>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(colors.primary, false, 210)}
                                         onPress={onPress}>
                    <View>
                        <Text style={styles.about}> {name} - {new Date(time).toLocaleDateString()}</Text>
                        <View style={styles.detailsContainer}>
                            <Text style={styles.title} numberOfLines={1}>{title}</Text>
                            {/*<Text style={styles.subTitle}>{subtitle}</Text>*/}
                            {/*<Image source={avatar} style={styles.avatar}/>*/}
                        </View>
                        <View style={styles.preview}>
                            <Text style={styles.previewText} numberOfLines={5}>{text}</Text>
                        </View>
                        <View style={{height:20, flexDirection:"row", justifyContent: "center"}}>
                            <Text>Писем в цепочке: {more}</Text>
                        </View>
                        {hasFiles &&
                        <AntDesign style={styles.attach} name="paperclip" size={22} color={colors.primary}/>}
                    </View>
                </TouchableNativeFeedback>
            </View>
        </Swipeable>
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
        borderTopColor: colors.secondary,
        borderTopWidth: 1,
        borderBottomColor: colors.secondary,
        borderBottomWidth: 1,
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
