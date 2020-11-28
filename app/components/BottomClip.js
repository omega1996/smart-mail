import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, ImageBackground, TouchableNativeFeedback} from "react-native";
import colors from "../config/colors";
import center from "../assets/center.png"
import {FontAwesome5} from '@expo/vector-icons'
import FolderMenu from '../components/FolderMenu'

function BottomClip({onChangeFolder, folder, folderNames, opened, setFolderOpened}) {


    return (
        <>
            <FolderMenu folderNames={folderNames} onChangeFolder={onChangeFolder} opened={opened}/>
            <View style={styles.bottomButtons}>
                <View style={styles.shrinkBox}>
                    <TouchableNativeFeedback onPress={() => opened ? setFolderOpened(false) : setFolderOpened(true)}>
                        <View style={styles.folderButton}>
                            <FontAwesome5 style={styles.folderIcon} name={folder.icon} size={20} color={colors.secondary}/>
                            <Text style={styles.folderText}>{folder.name}</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <ImageBackground style={styles.holeImage} source={center}>
                    {!opened && <View style={styles.mainButton}>
                        <TouchableNativeFeedback>
                            <FontAwesome5 name="pen" size={25} color={colors.black}/>
                        </TouchableNativeFeedback>
                    </View>}
                </ImageBackground>
                <View style={[styles.shrinkBox, {flexDirection: 'row-reverse'}]}>
                    <FontAwesome5 style={styles.folderIcon} name={'search'} size={25} color={colors.secondary}/>
                </View>
            </View>

        </>
    );
}

const styles = StyleSheet.create({
    folderButton: {
        marginLeft: 10,
        height: 50,
        width: 150,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    bottomButtons: {
        height: 60,
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        flexDirection: "row",
        backgroundColor: "transparent"
    },
    folderIcon: {
        marginRight: 5
    },
    folderText: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.secondary
    },
    mainButton: {
        backgroundColor: colors.secondary,
        height: 60,
        width: 60,
        borderRadius: 30,
        top: -30,
        alignItems: "center",
        justifyContent: "center"
    },
    shrinkBox: {
        flexShrink: 1,
        flex: 1,
        backgroundColor: colors.white,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    holeImage: {
        alignItems: "center",
        height: 60,
        width: 100
    }

});

export default BottomClip;
