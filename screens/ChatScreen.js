import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ChatView from "../components/ChatView";
import InputBar from "../components/InputBar";
// import NavigationBar from "../components/NavigationBar"

export default function ChatScreen() {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <ChatView />
            {/* <Button title="Quiz Screen" onPress={() => navigation.navigate("QuizScreen")} /> */}
            {/* <StatusBar style="auto" /> */}
            {/* <NavigationBar /> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
