import { Message } from './components/message';
import './App.css';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <Message text="Hello React" />
      <h3>My name {props.name}</h3>

    </div>
  );
}

export default App;
