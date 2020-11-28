import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, Text, Platform, StatusBar} from "react-native";
import colors from "../config/colors";
import Card from "../components/Card";
import CardReplyAction from "../components/CardReplyAction";
import CardArchiveAction from "../components/CardArchiveAction";
import {useNavigation} from "@react-navigation/native"


function FeedScreen({folder, initialMails}) {
    const navigation = useNavigation()
    const foldered = initialMails.filter(fo => fo.title === folder.key)[0];
    const [mails, setMails] = useState(foldered.thems);
    const [refreshing, setRefreshing] = useState(false);

    const handleArchive = mail => {
        // архивировать на сервере
        // удалить из списка
        setMails(mails.filter(m => m.id !== mail.id))
    };
    const onClickChain = (item) => {
        navigation.navigate("Chain", {chain: item})
    };

    const refreshMails = () => {
        setMails(foldered.thems)
    };

    useEffect(()=>{
        setMails(foldered.thems)
    })
    return (
        <View style={styles.container}>
            <View style={styles.feedBackground}>
                <Text style={{alignSelf:"flex-end"}}>0/{foldered.thems_count}</Text>
                <FlatList
                    data={mails}
                    // style={styles.mailList}
                    keyExtractor={message => message.id.toString()}
                    renderItem={({item}) =>
                        <Card
                            title={item.title}
                            name={item.last_sender_name}
                            time={item.date}
                            text={item.letters[0].text}
                            onPress={() => {
                                onClickChain(item)
                            }}
                            more={item.letters_count}
                            id={item.id}
                            renderRightActions={() => <CardReplyAction onReplyAll={() => {
                                console.log(item)
                            }}/>}
                            renderLeftActions={() => <CardArchiveAction onArchive={() => handleArchive(item)}/>}
                        />}
                    ListFooterComponent={() => (
                        <View style={{width: '100%', height: 100, backgroundColor: "transparent"}}/>
                    )}
                    refreshing={refreshing}
                    onRefresh={refreshMails}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    feedBackground: {
        flex: 1,
        backgroundColor: "lightgrey"
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});


export default FeedScreen;
