import React from 'react';
import {StyleSheet, View, Text, FlatList, TextInput} from "react-native";
import colors from "../config/colors";
import {FontAwesome5} from '@expo/vector-icons'

function ChainScreen({route}) {
    const mails = route.params.chain;
    const me = "Konyrev.D.An@sberbank.ru"
    return (
        <View style={styles.chainBackground}>
            <Text>Тема: {mails.title}</Text>
            <FlatList
                data={mails.letters}
                keyExtractor={message => message.id.toString()}
                style={{flexDirection: "column"}}
                inverted={true}
                renderItem={({item}) =>
                    <View style={[styles.messageWindow, item.sender_email === me && {backgroundColor: colors.secondary}]}>
                        <Text style={{fontWeight:"700"}}>{item.sender_name}:</Text>
                        <Text style={{position:"absolute", right:20, alignSelf:"flex-end"}}>{new Date(item.date).toLocaleDateString()}, {new Date(item.date).toLocaleTimeString()}</Text>
                        <Text>{item.text}</Text>

                    </View>
                }

            />
            <View style={styles.outputContainer}>
                <FontAwesome5 size={25} name={"reply"}/>
                <TextInput style={{width:220}} placeholder="Сообщение"/>
                <FontAwesome5 size={25} name={"paperclip"}/>
                <FontAwesome5 size={25} name={"microphone"}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    messageWindow: {
        backgroundColor: colors.white,

        margin: 15,
        padding: 15,
        borderRadius: 15
    },
    outputContainer: {
        width:"100%",
        height:60,
        backgroundColor: colors.white,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    chainBackground: {
        flex: 1,
        backgroundColor: "lightgrey"
    }

});

export default ChainScreen;
