import { useState, useEffect } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";


function App() {


  const [value, setValue] = useState('');

  const onChange = messageText => {
    setValue(messageText.target.value)
  }


  const [message, messageList] = useState([]);

  useEffect(() => {
    const lastMessage = message.slice(-1);
    if (lastMessage.length && lastMessage[0].user !== 'Bot') {
      addMessage((createMessage('Hello world', "Bot")))
    }

  }, [message])


  const createMessage = (message, user = "Vlad") => ({
    message,
    user
  });


  const addMessage = (...items) => {
    messageList((message) => {
      return [
        ...message,
        ...items,
      ]
    })

  }

  return (
    <div>
      <Input type="text" value={value} func={onChange} />
      <Button text="Send message" func={() => { addMessage((createMessage(value, "Vlad"))) }} />




      < ul >
        {
          message.map(({ message, user }) => <li>
            <h3>
              message: {message}
            </h3>
            <p>
              user: {user}
            </p>
          </li>)
        }
      </ul >
    </div >
  )
}
export default App;
