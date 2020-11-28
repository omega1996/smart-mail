import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    Platform,
} from 'react-native';

import WelcomeScreen from "./app/screens/WelcomeScreen";
import FeedScreen from "./app/screens/FeedScreen";
import BottomLine from "./app/components/BottomLine";
import BottomClip from "./app/components/BottomClip";


export default function App() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const handlePress = () => console.log('text pressed')

    return (
        <View style={styles.container}>
            <FeedScreen></FeedScreen>

            {/*<BottomLine/>*/}
            <BottomClip></BottomClip>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});
