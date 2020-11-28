import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import background from '../assets/bg_sber.png'
import logo from "../assets/sber_logo_main.png";
import colors from "../config/colors";


function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.bgImage} source={background}>
            <View style={styles.mainBlock}>
                <Image source={logo} style={styles.logo}/>
                <Text style={styles.mailText}>ПОЧТА</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({

    bgImage: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
        width: 100,
        height: 60
    },
    logo: {
        height: 60,
        width: 230
    },
    mailText: {
        fontSize: 50,
        color: colors.primary,
        fontWeight: "700",
    },
    mainBlock: {
        flex: 10,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default WelcomeScreen;
