import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";

export function MessageProvider({ children }) {
   const { roomId } = useParams();
   // chatList передать value в дочерний инпут

   const [conversations, setConversations] = useState([
      { title: "chat1", value: "" },
      { title: "chat2", value: "" },
   ])
   const [messages, setMessages] = useState({
      chat1: [{ value: "Hi", user: "Vlad", id: nanoid() }],
      chat2: [],

   })

   const updateConversationsValue = useCallback((value = "") => {
      setConversations(conversations => {
         return conversations.map(conversation => {
            return conversation.title === roomId
               ? { ...conversation, value }
               : conversation;
         })
      })
   }, [roomId])

   const state = useMemo(() => {
      return {
         messages: messages[roomId] ?? [],
         value: conversations.find(conversation => conversation.title === roomId)?.value ?? "",
         conversations,
      }
   }, [roomId, messages, conversations]);

   const actions = useMemo(() => {
      return {
         handleChangeValue: (e) => {
            const value = e?.target?.value ?? "";
            updateConversationsValue(value)
         },
         createConverstion: () => {
            alert("Test")
            // const title = prompt("test");

            // setConversations((conversations) => [
            //    ...conversations,
            //    { title, value: "" }])
         },

         sendMessage: (message) => {

            const newMessage = { ...message, id: new Date() }
            setMessages((messages) => {

               return {
                  ...messages,
                  [roomId]: [...(messages[roomId] ?? []), newMessage],
               };
            });
            updateConversationsValue()

         },
      };

   }, [roomId, updateConversationsValue]);

   useEffect(() => {
      const messagesByRoomId = messages[roomId] ?? [];
      const lastMessage = messagesByRoomId[messagesByRoomId.length - 1];
      let timerId = null;

      if (lastMessage?.user === "Vlad") {
         timerId = setTimeout(() => {
            actions.sendMessage({ user: "Bot", value: "Hello" })
         }, 1000)
      }

      return () => clearInterval(timerId)
   }, [messages, roomId, actions])


   return children([state, actions]);
}