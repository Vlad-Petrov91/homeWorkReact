import React from "react";
import { Message } from "./message";
import { handleChangeMessageValue, messageValueSelector } from "../../store/conversations"
import { addMessage } from "../../store/messages";
import { Input, InputAdornment } from '@mui/material';
import { nanoid } from "nanoid";
import { Send } from '@mui/icons-material';
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { messagesSelector } from "../../store/messages";


export const MessageList = () => {



   const { roomId } = useParams();

   const messageValue = useMemo(() => messageValueSelector(roomId), [roomId]);

   const messages = useSelector(messagesSelector(roomId));





   const dispatch = useDispatch();
   const value = useSelector(messageValue);

   const sendMessage = () => {
      if (value) {
         dispatch(addMessage({ value, user: "Vlad", id: nanoid() }))

      }

   }

   const handlePressInput = ({ code }) => {
      if (code === "Enter" && value)
         sendMessage({ value, user: "Vlad" });


   }

   return (
      <div className={"chat"}>
         {messages.map((message, id) => <Message key={nanoid()} message={message} />)}
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
               <InputAdornment position="end">{value && (<Send className={"icon"} onClick={sendMessage} />)}</InputAdornment>}
            type="text"
            onChange={(e) =>
               dispatch(handleChangeMessageValue(e.target.value, roomId))
            }
            value={value}
            placeholder=" Введите сообщение...">
         </Input >



      </div>


   );
}


