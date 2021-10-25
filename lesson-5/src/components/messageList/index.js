import React from "react";
import { Message } from "./message";

import { Input, InputAdornment } from '@mui/material';
import { nanoid } from "nanoid";
import { Send } from '@mui/icons-material';




export const MessageList = ({ messages, sendMessage, value, handleChangeValue }) => {

   // const [messageList, setMessageList] = useState([]);






   const addMessage = () => {
      if (value) {
         // setMessageList((state) => [...state, { value: value, user: "Vlad" }]);
         // setValue('')
         sendMessage({ value, user: "Vlad" });

      }

   }

   const handlePressInput = ({ code }) => {
      if (code === "Enter" && value)
         sendMessage({ value, user: "Vlad" });
      // setValue("") //addMessage()

   }







   return (
      <div>

         <div className={"chat"}>    {messages.map((message, id) => <Message key={nanoid()} message={message} />)}
            <Input
               sx={{
                  color: "#e1f5fe",
                  position: "absolute",
                  bottom: 0
               }}
               autoFocus={true}
               fullWidth={true}
               onKeyPress={handlePressInput}
               endAdornment={
                  <InputAdornment position="end">{value && (<Send className={"icon"} onClick={addMessage} />)}</InputAdornment>}
               type="text"
               value={value}
               onChange={handleChangeValue}
               placeholder=" Введите сообщение...">
            </Input >



         </div>

      </div >
   );
}


