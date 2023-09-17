import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import TitleCard from "../components/TitleCard";
import { LinearGradient } from "expo-linear-gradient";
import { QuizSelectionCard } from "../components/cards/QuizSelectionCard";
import { VerticalCardsContainer } from "../components/cardcontainers/VerticalCardsContainer";
import { Overlay, withTheme } from "react-native-elements";
import { FlippedCard } from "../components/cards/FlippedCard";
import React, { useState, useContext, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getQuizOpenAI, fetchCartesiData } from "../api/openai";

import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/Feather";

import { ChatContext } from "../context/ChatContext";
import LottieView from "lottie-react-native";

export default function QuizScreen() {
  const chatContext = useContext(ChatContext);
  const [visible, setVisible] = useState(false);
  const [quizzesState, setQuizzesState] = useState([]);

  const [cartesiDB, setCartesiDB] = useState([]);
  const [overlayTitleState, setOverlayTitleState] = useState("");

  const toggleOverlay = () => {
    console.log("toggleOverlay");
    setVisible(!visible);
  };

  useEffect(() => {
    fetchCartesiData().then((r) => {
      setCartesiDB(r);
    });
  }, []);

  function handleQuiz() {
    console.log("=======handleQuiz=========");
    console.log(chatContext.userResponse);

    // Call to get the quiz
    if (chatContext.chatLog !== undefined && chatContext.chatLog !== "") {
      console.log("Sending" + chatContext.chatLog);
      console.log("Creating chat log");
      var chatLog = "";
      chatContext.userResponse.forEach((element) => {
        console.log(element.content);
        chatLog += element.role + ": " + element.content;
      });
      console.log(chatLog);
      getQuizOpenAI(chatLog).then((r) => {
        console.log("Received: " + r);
        r = JSON.parse(r);
        r.questions.forEach((item) => {
          chatContext.addQuiz(item);
        });
        chatContext.addQuizSet(r.questions);
      });
    } else {
      console.log("Empty, do not send");
    }

    // Reset chat log
    chatContext.resetLog();
  }

  return (
    <View style={{ flex: 1, width: "100%", backgroundColor: "white" }}>
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        style={{ width: "100%", backgroundColor: "white" }}
      >
        <View style={styles.quizTakingView}>
          <View
            title="topBar"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                width: "100%",
                zIndex: -1,
                fontSize: 18,
                textAlign: "center",
                paddingVertical: 7,
                fontWeight: "bold",
                justifyContent: "center",
                alignContent: "center",
              }}
              t
            >
              {overlayTitleState}
            </Text>
          </View>
          <ScrollView
            style={{ display: "flex", backgroundColor: "white" }}
            horizontal
          >
            {quizzesState.map((element, index) => {
              console.log(element);
              console.log("Loop: " + index + element.question);
              return (
                <FlippedCard
                  question={element.question}
                  answer={element.answer}
                  key={index}
                />
              );
            })}
          </ScrollView>
          <TouchableOpacity onPress={toggleOverlay} style={styles.button}>
            <Ionicons
              name={"close-circle-outline"}
              color="black"
              size={40}
              style={{ marginLeft: "48%", marginTop: -100 }}
            />
          </TouchableOpacity>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <LottieView
              source={require("../assets/lottie/cat.json")}
              style={{ width: 100, height: 100, marginBottom: 10 }}
              autoPlay
              loop
            />
          </View>
        </View>
      </Overlay>

      <LinearGradient
        colors={["#fff", "#fff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          position: "absolute",
          backgroundColor: "#fff",
          height: "20%",
          width: "100%",
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      />
      <SafeAreaView style={styles.container}>
        <TitleCard
          title="Welcome!"
          text="To your study set."
          leftColor="#fff"
          rightColor="#fff"
        />
        <View style={{ padding: 10, width: "100%", height: "75%" }}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.innerContent}>
              {/* Add other components/content here */}
              <Text style={styles.sectionTitle}>Personalized Quizzes</Text>
              <ScrollView style={styles.scrollView} horizontal>
                {chatContext.quizSets.map((quizSet, index) => {
                  return (
                    <QuizSelectionCard
                      key={index}
                      title={"Quiz " + (index + 1)}
                      description=""
                      leftColor="#fff"
                      rightColor="#fff"
                      iconName="arrow-forward-outline"
                      isMarginedRight
                      onPress={() => {
                        setOverlayTitleState("Quiz " + (index + 1));
                        setQuizzesState(quizSet);
                        console.log("QuizScreen: toggleOverlay: ");
                        console.log(quizzesState);
                        console.log(quizSet);
                        console.log(chatContext.quizSets);
                        toggleOverlay();
                      }}
                    />
                  );
                })}
              </ScrollView>
              <View>
                <View>
                  <Text style={styles.sectionTitle}>All Quizzes</Text>
                </View>

                <View style={styles.scrollView}>
                  <TouchableOpacity style={styles.wrapper} onPress={handleQuiz}>
                    <Icon name="book-open" style={styles.quiz}></Icon>
                    <Text style={styles.quiztext}>Create Quiz from Chat</Text>
                  </TouchableOpacity>
                  {cartesiDB != undefined &&
                    cartesiDB.map((item, index) => {
                      let data = JSON.parse(item.echo);
                      return (
                        <QuizSelectionCard
                          key={index}
                          title={data.title}
                          description="Test your knowledge here!"
                          leftColor="#fff"
                          rightColor="#fff"
                          iconName="arrow-forward-outline"
                          onPress={() => {
                            setOverlayTitleState(data.title);
                            setQuizzesState(data.questions);
                            toggleOverlay();
                          }}
                        />
                      );
                    })}
                  {/* <QuizSelectionCard title="test" description="text" leftColor="#fff" rightColor="#fff" iconName="arrow-forward-outline"/> */}
                  {/* <QuizSelectionCard title="test" description="text" leftColor="#fff" rightColor="#fff" iconName="arrow-forward-outline"/>
                <QuizSelectionCard title="test" description="text" leftColor="#fff" rightColor="#fff" iconName="arrow-forward-outline"/>
                <QuizSelectionCard title="test" description="text" leftColor="#fff" rightColor="#fff" iconName="arrow-forward-outline"/>
                <QuizSelectionCard title="test" description="text" leftColor="#fff" rightColor="#fff" iconName="arrow-forward-outline"/> */}
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginRight: "auto",
  },
  close: {
    fontSize: 40,
    padding: 10,
  },
  wrapper: {
    display: "flex",
    height: "auto",
    flexDirection: "row",
    marginVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: "black",
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
  },
  quiz: {
    paddingVertical: 27,
    fontSize: 40,

    color: "white",
  },
  quiztext: {
    color: "white",
    paddingVertical: 33,
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  quizTakingView: {
    display: "flex",
    paddingTop: 50,
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
  scrollView: {
    backgroundColor: "black",
    width: "100%",
    padding: 5,
    marginVertical: 5,
  },
  sectionTitle: {
    fontWeight: "700",
    color: "white",
    fontSize: 25,
  },
  text: {
    fontSize: 42,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // You can adjust this based on your image size
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 50,
    backgroundColor: "#000",
    width: "100%",
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  innerContent: {
    width: "100%", // Ensure that the inner content takes up 100% width
  },
});
