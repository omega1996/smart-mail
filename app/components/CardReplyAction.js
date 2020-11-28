import React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from "react-native";
import {FontAwesome5} from '@expo/vector-icons'
import colors from "../config/colors";

// быстрый forward, быстрые ответы, прочитано?,


function CardReplyAction({onReplyAll, onForward, onSeen, onFastForward}) {
    return (
        <View style={styles.replyContainer}>
            <View style={styles.replyTop}>
                <TouchableWithoutFeedback onPress={onReplyAll}>
                    <View style={styles.replyColumn}>
                        <FontAwesome5 name={'reply-all'} color={colors.opposite} size={30}/>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.replyColumn}>
                    <FontAwesome5 name={'share-square'} color={colors.secondary} size={30}/>
                </View>
                <View style={styles.replyColumn}>
                    <FontAwesome5 name={'eye'} color={colors.primary} size={30}/>
                </View>
            </View>
            <View style={styles.replyBottom}>
                <FontAwesome5 name={'reply'} color={colors.opposite} style={{position: "absolute", top:-20}} size={20}/>
                <View style={styles.replyColumn}>
                    <View style={styles.fastRepliesContainer}>
                        <Text numberOfLines={1} style={styles.fastReplies}>Ок, спасибо</Text>
                        <Text numberOfLines={1} style={styles.fastReplies}>Утверждаю</Text>
                        <Text numberOfLines={1} style={styles.fastReplies}>Вас понял!</Text>

                    </View>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    replyContainer: {
        width: 140,
    },
    fastRepliesContainer: {
        flexDirection: 'row',
        alignItems: "flex-end",
        flexWrap: 'wrap',

    },
    fastReplies: {
        backgroundColor: colors.secondary,
        borderRadius: 5,
        height:22,
        paddingHorizontal: 8,
        margin: 2.5
    },
    replyColumn: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    replyTop: {
        flex: 1,
        flexDirection: 'row'
    },
    replyBottom: {
        flex: 1,
    }
});

export default CardReplyAction;
