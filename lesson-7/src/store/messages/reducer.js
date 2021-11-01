import { id } from "date-fns/locale";
import { nanoid } from "nanoid";
import { ADD_MESSAGE, DELETE_MESSAGE } from "./types"

const initalState = {
   messages: {
      room1: [],
      room2: [],

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
                  { ...action.payload.message },
               ],
            },

         };
      case DELETE_MESSAGE:
         return {
            ...state.messages[action.payload.roomId].filter((item) => item.id !== action.payload.id)
         };
      default:
         return state;
   }
};