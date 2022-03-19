// import { response } from 'express';
// import { json } from 'express';  
import React, { Component } from 'react';
import ReactDOM from "react-dom";
class ActionProvider  {
  constructor(createChatBotMessage, setStateFunc,createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setStatee = setStateFunc;
    this.createClientMessage = createClientMessage;
    
  } 
  
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  
  handleSubmit = async e => {
     e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post}),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body } );
    const messages = this.createChatBotMessage({responseToPost: body});
    this.addMessageToBotState(messages);
  };
 
  
  handleMessageParser = () => {
    const messages = this.createChatBotMessage(
      "The message parser controls how the bot reads input and decides which action to invoke.",
      { widget: "messageParser", withAvatar: true }
    );

    this.addMessageToBotState(messages);
  };
  greet = () => {
    
    const messages = this.createChatBotMessage("hello btich");
    this.addMessageToBotState(messages);
  }

  handleDefault = () => {
    const message = this.createChatBotMessage("How can I help?", {
      withAvatar: true,
    });

    this.addMessageToBotState(message)
  };

  addMessageToBotState = (messages) => {
    if (Array.isArray(messages)) {
      this.setStatee((state) => ({
        ...state,
        messages: [...state.messages, ...messages],
      }));
    } else {
      this.setStatee((state) => ({
        ...state,
        messages: [...state.messages, messages],
      }));
    }
  };
}

export default ActionProvider;