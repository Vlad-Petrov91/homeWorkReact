import React, { useState, useEffect } from "react";
import { Message } from "./message";
import { Chatlist } from "../chatList";
import { Input, InputAdornment } from '@mui/material';
import { List } from '@mui/material';
import { Send } from '@mui/icons-material';




export const MessageList = () => {

   const [messageList, setMessageList] = useState([{ value: "Hello", user: "Bot" }]);
   const [value, setValue] = useState('')
   const [chatList, setChatList] = useState([{ name: "Chat1", id: "1" }, { name: "Chat2", id: "2" }, { name: "Chat3", id: "3" },])


   useEffect(() => {
      const lastMessage = messageList[messageList.length - 1]
      let timerId = null

      if (messageList.length !== 0 && lastMessage.user === "Vlad") {
         timerId = setTimeout((addMessageBot), 2000)
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
      <div className={"wrapper"}>
         <List className={"chatList"}>
            {chatList.map((chat) => <Chatlist key={chat.id} chat={chat.name} />)}</List>
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


