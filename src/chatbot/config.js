import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz"
import ActionProvider from "./ActionProvider";

const config = {
    botName: "LearningBot",
    chatButton: {
        
      },
    initialMessages: [
        createChatBotMessage('Hello, how can i help you?', {
        widget: "options"
    }),
],
    widgets: [

    {
        widgetName: "options",
        widgetFunc: (props) => <Options {...props}/>,
    },
    {
        widgetName: "statSeq",
        widgetFunc: (props) => <Quiz {...props} />,
        props: {
            questions: [
                {
                  question: "show info",
                  answer:
                    "stats.",
                  id: 1,
                },
                // {
                //   question: "Explain prototypal inheritance",
                //   answer:
                //     "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
                //   id: 2,
                // },
            ],
        }
    }, 
  ],
};
export default config;