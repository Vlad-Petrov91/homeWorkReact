import { nanoid } from "nanoid";
import { db } from "./fireBase";
import firebase from "firebase/compat"



export const getMessagesApi = () => db.ref("messages").get();

export const sendMessageApi = (message, roomId) =>
   db.ref("messages")
      .child(roomId)
      .push({ ...message, id: nanoid() });