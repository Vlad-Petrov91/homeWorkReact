import { nanoid } from "nanoid";
import { ADD_MESSAGE, MESSAGE_LIST } from "./types"

const initalState = {
   messages: {
      chat1: [{ value: "Hello", user: "Vlad", id: nanoid() }],
      chat2: [{ value: "Hi", user: "Vlad", id: nanoid() }],

   },
};

export const messagesReducer = (state = initalState, action) => {
   switch (action.type) {
      case ADD_MESSAGE:
         return {
            ...state,
            messages: {
               ...state.messages,
               [action.payload.roomId]: [
                  ...state.messages[action.payload.roomId],
                  { ...action.payload.value }
               ],
            },

         }
      default:
         return state;
   }
};