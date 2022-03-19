// import e from "express";

class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
    //   console.log(message);
      const lowercase = message.toLowerCase();
  
      if (lowercase.includes("hello")) {
        this.actionProvider.greet();
      }
      if (lowercase.includes("teez"))
      {
          this.actionProvider.handleStats();
      }
      else
      {
        this.actionProvider.handleSubmit(Event);
      }
    //   if (lowercase.includes("javascript") || lowercase.includes("js")) {
    //     this.actionProvider.handleJavascriptQuiz();
     // }
    // console.log(message);
    }
  }
  
  export default MessageParser;