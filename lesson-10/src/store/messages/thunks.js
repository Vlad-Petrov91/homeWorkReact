import {
   addMessage, getMessagesStart,
   getMessagesSuccess,
   getMessagesError,
} from "./actions";
import { clearInput } from "../conversations";

export const sendMessageWithThunk = (message, roomId, id) => (dispatch) => {
   dispatch(addMessage(message, roomId, id));
   dispatch(clearInput(roomId));
};

export const getMessagesFB = () => async (dispatch, _, api) => {
   try {
      dispatch(getMessagesStart());
      const data = await api.getMessagesApi();

      const messages = {};

      data.forEach((snap) => {
         messages[snap.key] = Object.values(snap.val());
      });

      dispatch(getMessagesSuccess(messages));
   } catch {
      dispatch(getMessagesError("Error"));
   }
};


   // if (message.user === "Vlad") {
   //    setTimeout(() => {
   //       dispatch(addMessage({ user: "Bot", value: "Hello" }, roomId));
   //    }, 1000);
   // }

