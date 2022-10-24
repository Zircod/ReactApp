import './App.css';
import Message from "./components/Message/message";

const App = () => {
  const msg = {
    text: 'Hi',
    author: 'Ann',
  }

  return (
    <div className="App">
      <Message text={msg.text} author={msg.author}/>
    </div>
  );
};

export default App;
