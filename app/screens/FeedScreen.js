import React from 'react';
import {StyleSheet, View, FlatList} from "react-native";

import colors from "../config/colors";
import Card from "../components/Card";

import mails from "../assets/messages"

function FeedScreen(props) {
    return (
        <View style={styles.feedBackground}>
            <FlatList
                data={mails}
                style={styles.mailList}
                keyExtractor={message => message.message_id.toString()}
                renderItem={({item}) =>
                    <Card
                        title={item.subject}
                        name={item.from}
                        time={item.date}
                        text={item.clean_text}
                    />}
                ListFooterComponent={()=>(
                    <View style={{width:'100%', height:100, backgroundColor: "transparent"}} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    feedBackground: {
        flex: 1,
        backgroundColor: "lightgrey"
    }
});


export default FeedScreen;
