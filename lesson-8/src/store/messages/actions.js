import { ADD_MESSAGE, DELETE_MESSAGE } from "./types";

export const addMessage = (message, roomId, id) => ({
   type: ADD_MESSAGE,
   payload: { message, roomId, id },
   meta: {
      delay: 1500,
   }
});

export const deleteMessage = (roomId, id) => ({
   type: DELETE_MESSAGE,
   payload: { roomId, id },

});



