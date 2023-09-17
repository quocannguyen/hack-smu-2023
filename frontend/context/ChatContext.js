import { createContext, useState } from "react";

export const ChatContext = createContext({
    userInputs: [],
    addUserInput: (userInput) => {},
    responses: [],
    addResponse: (response) => {},
    userResponse: [],
    resetLog: () => {},
    quizzes: [],
    addQuiz: () => {},
    chatLog: "",
    quizSets: [],
    addQuizSet: () => {},
})

export function ChatContextProvider(props) {
    const [chatLog, setChatLog] = useState("")
    const [userInputsState, setUserInputsState] = useState([])
    const [responsesState, setResponsesState] = useState([])
    const [userResponseState, setUserResponseState] = useState([])
    const [quizzesState, setQuizzesState] = useState([])
    const [quizSetsState, setQuizSetsState] = useState([])

    async function addUserInputHandler(userInput) {
        await setUserResponseState((prevUserResponseState) =>[
            ...prevUserResponseState,
            {
                role: "user", 
                content: userInput
            }
        ])
        // chatLog += "User: " + userInput + '\n'
        const newString = chatLog + "User: " + userInput + '\n'
        setChatLog(newString)
        console.log("ChatContext: setUserState: " + chatLog)
    }

    async function addResponseHandler(response) {
        await setUserResponseState((prevUserResponseState) =>[
            ...prevUserResponseState,
            {
                role: "response",
                content: response
            }
        ])
        const newString = chatLog + "System: " + response + '\n'
        setChatLog(newString)
        console.log("ChatContext: setResponseState: " + chatLog)
    }

    async function resetLogHandler() {
        console.log("Reset handler")
        setUserResponseState([]);
        setChatLog("")
    }

    async function addQuizHandler(quizz) {
        console.log("ChatContext: addQuizHandler: " + quizz)
        setQuizzesState((prevState) => [
            ...prevState,
            quizz
        ])
        console.log("ChatContext: addQuizHandler: " + quizzesState)
    }

    async function addQuizSetHandler(quizSet) {
        // let quizSet = [...quizzesState]
        // console.log("ChatContext: addQuizSetHandler: "  + quizSet)

        // setQuizSetsState((prevState) => [
        //     ...prevState,
        //     quizSet
        // ])
        // // setQuizzesState([])
        setQuizSetsState((prevState) => [
            ...prevState,
            quizSet,
        ])
    }

    const context = {
        userInputs: userInputsState,
        addUserInput: addUserInputHandler,
        responses: responsesState,
        addResponse: addResponseHandler,
        userResponse: userResponseState,
        resetLog: resetLogHandler,
        quizzes: quizzesState,
        addQuiz: addQuizHandler,
        chatLog: chatLog,
        quizSets: quizSetsState,
        addQuizSet: addQuizSetHandler
    }
    return (
        <ChatContext.Provider value={context}>
            {props.children}
        </ChatContext.Provider>
    )
}