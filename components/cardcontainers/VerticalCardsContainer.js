import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Button, Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import QuizSelectionCard from "../cards/QuizSelectionCard"

export function VerticalCardsContainer(props) {
    // const { title, quizSelections } = props
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <ScrollView style={styles.cardsContainer}>
                {/* {
                    quizSelections.map((quiz) => {
                        return <QuizSelectionCard title={quiz.title} description={quiz.description}/>
                    })
                } */}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 0,

    },
    titleContainer: {

    }, 
    title: {
        fontWeight: "700",
        fontSize: 25
    },
    cardsContainer: {
        backgroundColor: 'black',
        width: "100%",
        padding: 20,
        margin: 0,
    }
});
