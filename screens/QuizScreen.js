import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QuizCard from "../components/QuizCardTest"

export default function QuizScreen() {
    // const navigation = useNavigation()

    const onPressHandle = () => {
      // navigation.navigate("ChatScreen");
    }

    return (
        <SafeAreaView style={styles.container}>
            <QuizCard style="styles.QuizCard" question="Hello?" answer="Hi!" />
            <Button title="Chat Screen" onPress={onPressHandle}/>
            <StatusBar style="auto" />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },

});
