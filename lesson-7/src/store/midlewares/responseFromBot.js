import { nanoid } from "nanoid";
import { addMessage } from "../messages";
import { ADD_MESSAGE } from "../messages/types"

export const botSendMessage = (store) => (next) => (action) => {
   if (action.type === ADD_MESSAGE) {
      if (action.payload.message.user === "Vlad") {
         setTimeout(() => {
            store.dispatch(addMessage({
               user: "Bot from midleware",
               value: "Hi",
               id: nanoid()
            }, action.payload.roomId))
         }, 1000)
      }
   }
   return next(action);
}