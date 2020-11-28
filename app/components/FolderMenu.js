import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Text, TouchableNativeFeedback} from "react-native";
import colors from "../config/colors";
import {FontAwesome5} from '@expo/vector-icons'

function FolderMenu({opened, onChangeFolder, folderNames}) {
    return (
        <View style={[styles.menu, opened && styles.opened]}>
            <FlatList
                data={folderNames}
                keyExtractor={folder => folder.key.toString()}
                renderItem={({item}) =>
                    <TouchableNativeFeedback onPress={()=>onChangeFolder(item)}>
                        <View style={styles.chooseFolder}>
                            <FontAwesome5 size={25} style={{marginLeft: 10}} name={item.icon}/>
                            <Text style={styles.chooseFolderText}>{item.name}</Text>
                        </View>
                    </TouchableNativeFeedback>
                }
            >
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    chooseFolder: {
        margin: 5,
        padding: 5,
        borderRadius: 10,
        height: 40,
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: colors.secondary
    },
    chooseFolderText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 10
    },
    menu: {
        width: "100%",
        height: 500,
        backgroundColor: "white",
        position: "absolute",
        bottom: -500
    },
    opened: {
        bottom: 0
    }
});

export default FolderMenu;
