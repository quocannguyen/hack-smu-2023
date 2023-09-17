import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ChatView from "../components/ChatView";
import InputBar from "../components/InputBar";
// import NavigationBar from "../components/NavigationBar"

export default function ChatScreen() {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.text}>Quizlog</Text>
            </View>
            <ChatView />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: 'black',
        paddingVertical: 20
    },  
    text: {
        fontSize: 30,
        paddingVertical: 10,
        color: '#fff',
        fontWeight: 'bold',
    },
});
