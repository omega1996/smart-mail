import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    Platform,
} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from "@react-navigation/native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import FeedScreen from "./app/screens/FeedScreen";
import BottomLine from "./app/components/BottomLine";
import BottomClip from "./app/components/BottomClip";
import ChainScreen from "./app/screens/ChainScreen";

import initialMails from "./app/assets/messages"

const Stack = createStackNavigator();
const FeedNav = () => {
    const folderNames = [{
        key: 'urgent',
        name: "Важные",
        icon: "exclamation"
    }, {
        key: 'out_mail',
        name: "Внешние письма",
        icon: "briefcase"
    }, {
        key: 'unessasary', name: "Неважные", icon: "socks"
    }, {
        key: 'services', name: "Уведомления", icon: "wallet"
    }, {
        key: 'mass_mailing',
        name: "Массовые источники",
        icon: "users"
    }, {
        key: 'miting', name: "Встречи", icon: "handshake"
    }];

    const [folder, setfolder] = useState(folderNames[0]);
    const onChangeFolder = (neededFolder) => {
        setfolder(neededFolder);
    };
    return (
        <View style={styles.container}>
            <FeedScreen folder={folder} initialMails={initialMails}/>
            <BottomClip folderNames={folderNames} folder={folder} onChangeFolder={onChangeFolder}/>
        </View>
    )
};


export default function App() {


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown:false}} name="Feed" component={FeedNav}/>
                <Stack.Screen name="Chain" options={({route}) =>({title: route.params.chain.title})} component={ChainScreen}/>
            </Stack.Navigator>
        </NavigationContainer>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});
