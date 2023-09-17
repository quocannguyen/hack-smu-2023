import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QuizCard from "../components/QuizCardTest"
import TitleCard from "../components/TitleCard"

export default function QuizScreen() {
  const onPressHandle = () => {
    // navigation.navigate("ChatScreen");
  }

  return (
    <ImageBackground
      source={require('../assets/background.png')} // Replace with the path to your background image in the assets folder
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <TitleCard title="Welcome!" text="Good news for all students!\nWe develop awesome apps!" />
          {/* Add other components/content here */}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // You can adjust this based on your image size
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 50,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
