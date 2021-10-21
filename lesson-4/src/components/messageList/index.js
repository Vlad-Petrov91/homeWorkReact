import React, { useState, useEffect } from "react";
import { Message } from "./message";

import { Input, InputAdornment } from '@mui/material';

import { Send } from '@mui/icons-material';




export const MessageList = () => {

   const [messageList, setMessageList] = useState([]);
   const [value, setValue] = useState('')



   useEffect(() => {
      const lastMessage = messageList[messageList.length - 1]
      let timerId = null

      if (messageList.length !== 0 && lastMessage.user === "Vlad") // lastMessage?.user === "Vlad"
      {
         timerId = setTimeout((addMessageBot), 1500)
      }
      return () => clearInterval(timerId)
   }, [messageList])

   const addMessage = () => {
      if (value) {
         setMessageList((state) => [...state, { value: value, user: "Vlad" }]);
         setValue('')
      }
   }

   const handlePressInput = ({ code }) => {
      if (code === "Enter" && value)
         addMessage()


   }

   const addMessageBot = () => {
      setMessageList((messageList) => [...messageList, { value: "Im Bot", user: "Bot" }])
   };



   return (
      <div>

         <div className={"chat"}>    {messageList.map((message) => <Message key={message.value} message={message} />)}



            <Input
               autoFocus={true}
               fullWidth={true}
               onKeyPress={handlePressInput}
               endAdornment={<InputAdornment position="end">{value && (<Send className={"icon"} onClick={addMessage} />)}</InputAdornment>}
               type="text"
               value={value}
               onChange={(value) => setValue(value.target.value)}
               placeholder=" Введите сообщение...">

            </Input >



         </div>

      </div >
   );
}


