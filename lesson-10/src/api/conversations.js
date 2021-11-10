import { db } from "./fireBase";

export const getConversationsApi = () => db.ref("conversations").get();

export const updateConversationValueApi = (roomId, messageValue) =>
   db
      .ref("conversations")
      .child(roomId)
      .update({ title: roomId, value: messageValue });