import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    Platform,
} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from "@react-navigation/native";
import FeedScreen from "./app/screens/FeedScreen";
import BottomClip from "./app/components/BottomClip";
import ChainScreen from "./app/screens/ChainScreen";

import initialMails from "./app/assets/messages"
import colors from "./app/config/colors";

const Stack = createStackNavigator();
const FeedNav = () => {
    const folderNames = [{
        key: 'Вопросы по ML проектам', //Важное
        name: "Вопросы по ML проектам",
        icon: "exclamation", id: 1
    }, {
        key: 'OCR (Штампы)', name: "OCR (Штампы)", icon: "exclamation", id: 2 //Важно,
    }, {
        key: 'Events', name: "Events", icon: "briefcase", id: 3 //Внешняя
    }, {
        key: 'Конференции', name: "Конференции", icon: "briefcase", id: 4 //Внешняя
    }, {
        key: 'Новости', name: "Новости", icon: "socks", id: 5 //Неважно
    }, {
        key: 'Команда библиотека моделей', name: "Команда библиотека моделей", icon: "socks", id: 6 //Неважное
    }, {
        key: 'Подтверждения от бота', // Уведомления
        name: "Подтверждения от бота",
        icon: "wallet", id: 7
    }, {
        key: 'Финансовые отчеты', name: "Финансовые отчеты", icon: "wallet",id: 8 //Уведомления
    }, {
        key: 'Мероприятия для сотрудников', name: "Мероприятия ", icon: "users",id: 9 //Массовая рассылка
    }, {
        key: 'Внутренняя документация', //Массовая рассылка
        name: "Внутренняя документация",
        icon: "users",id: 10
    }, {
        key: 'Приглашения', name: "Приглашения", icon: "handshake",id: 11 //Встречи
    }, {
        key: 'Встречи', name: "Встречи", icon: "handshake",id: 12 //Встречи
    }
    ];

    const [folder, setFolder] = useState(folderNames[0]);
    const onChangeFolder = (neededFolder) => {
        setFolder(neededFolder);
        setOpened(false)
    };
    let [opened, setOpened] = useState(false)

    const setFolderOpened = (item) => {
        setOpened(item)
    }


    return (
        <View style={styles.container}>
            <FeedScreen folder={folder} initialMails={initialMails}/>
            <BottomClip opened={opened} setFolderOpened={setFolderOpened} folderNames={folderNames} folder={folder}
                        onChangeFolder={onChangeFolder}/>
        </View>
    )
};


export default function App() {


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false, headerTintColor: colors.primary}} name="Feed"
                              component={FeedNav}/>
                <Stack.Screen name="Chain" options={({route}) => ({title: route.params.chain.title})}
                              component={ChainScreen}/>
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
