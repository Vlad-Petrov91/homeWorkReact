import { addMessage } from "./actions";
import { clearInput } from "../conversations";

export const sendMessageWithThunk = (message, roomId, id) => (dispatch) => {
   dispatch(addMessage(message, roomId, id));
   dispatch(clearInput(roomId));



   // if (message.user === "Vlad") {
   //    setTimeout(() => {
   //       dispatch(addMessage({ user: "Bot", value: "Hello" }, roomId));
   //    }, 1000);
   // }

};