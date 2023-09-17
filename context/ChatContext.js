import { createContext, useState } from "react";

export const ChatContext = createContext({
    userInputs: [],
    addUserInput: (userInput) => {},
    responses: [],
    addResponse: (response) => {},
    userResponse: [],
})
let ChatLog = ""

export function ChatContextProvider(props) {
    const [userInputsState, setUserInputsState] = useState([])
    const [responsesState, setResponsesState] = useState([])
    const [userResponseState, setUserResponseState] = useState([])

    async function addUserInputHandler(userInput) {
        // setUserInputsState([
        //     ...userInputsState,
        //     userInput
        // ])
        setUserResponseState((prevUserResponseState) =>[
            ...prevUserResponseState,
            {
                role: "user", 
                content: userInput
            }
        ])
        ChatLog += "User: " + userInput + '\n'
        // console.log(ChatLog)
        console.log(userResponseState)
    }

    async function addResponseHandler(response) {
        let isInput = false
        // setResponsesState([
        //     ...responsesState,
        //     response
        // ])
        setUserResponseState((prevUserResponseState) =>[
            ...prevUserResponseState,
            {
                role: "response",
                content: response
            }
        ])
        ChatLog += "System: " + response + '\n'
        // console.log(ChatLog)
        console.log(userResponseState)
    }

    const context = {
        userInputs: userInputsState,
        addUserInput: addUserInputHandler,
        responses: responsesState,
        addResponse: addResponseHandler,
        userResponse: userResponseState
    }
    return (
        <ChatContext.Provider value={context}>
            {props.children}
        </ChatContext.Provider>
    )
}