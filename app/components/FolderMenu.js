import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Text, TouchableNativeFeedback} from "react-native";
import colors from "../config/colors";
import {FontAwesome5} from '@expo/vector-icons'

function FolderMenu({opened, onChangeFolder, folderNames}) {
    return (
        <View style={[styles.menu, opened && styles.opened]}>
            <FlatList
                data={folderNames}
                keyExtractor={folder => folder.id.toString()}
                ListFooterComponent={() => (
                    <View style={{width: '100%', height: 60, backgroundColor: "transparent"}}/>
                )}
                renderItem={({item, index}) =>
                    <View>
                        {index === 0 ? <Text style={styles.chooseFolderText}>Важные:</Text> :
                            index === 2 ? <Text style={styles.chooseFolderText}>Внешние письма:</Text> :
                                index === 4 ? <Text style={styles.chooseFolderText}>Неважные:</Text> :
                                    index === 6 ? <Text style={styles.chooseFolderText}>Уведомления:</Text> :
                                        index === 8 ? <Text style={styles.chooseFolderText}>Массовая рассылка:</Text> :
                                            index === 10 ? <Text style={styles.chooseFolderText}>Встречи:</Text> :
                                                <View></View>

                        }
                        <TouchableNativeFeedback onPress={() => onChangeFolder(item)}>
                            <View style={styles.chooseFolder}>

                                {/*<FontAwesome5 size={25} style={{marginLeft: 10}} name={item.icon}/>*/}
                                <Text style={styles.chooseFolderText}>{item.name}</Text>
                                {/*<Text style={styles.chooseFolderText}>{item.thems_count}</Text>*/}
                            </View>
                        </TouchableNativeFeedback></View>
                }
            >
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    chooseFolder: {
        margin: 5,
        marginHorizontal:25,
        padding: 5,
        borderRadius: 10,
        height: 40,
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: colors.secondary
    },
    chooseFolderText: {
        fontSize: 20,
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
