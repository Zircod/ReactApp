import './App.css';
import {useEffect, useState} from "react";
import Form from "./components/Form/form";
import {AUTHORS} from "./utils/constants";
import MessageList from "./components/MessageList/messageList";

const App = () => {
  const [messages, setMessage] = useState([]);

  const addMessage = (newMsg) => {
    setMessage([...messages, newMsg]);
  }

  const sendMessage = (text) => {
    addMessage({
      author: AUTHORS.human,
      text,
      id: `msg-${Date.now()}`,
    })
  };

  useEffect(() => {
    let timeout;
    if (messages[messages.length -1]?.author === AUTHORS.human) {
      timeout = setTimeout(() => {
        addMessage({
          author: AUTHORS.robot,
          text: "Hello, friend!",
          id: `msg-${Date.now()}`, //for key
        });
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    }
  }, [messages]);

  return (
    <div className="App">
      <div className="appWrapper">
        <MessageList messages={messages}/>
        <Form onSubmit={sendMessage}/>
      </div>
    </div>
  );
};

export default App;
