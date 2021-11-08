import { ADD_MESSAGE, DELETE_MESSAGE, GET_MESSAGES_START, GET_MESSAGES_SUCESS, GET_MESSAGES_ERROR } from "./types";

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

export const getMessagesStart = () => ({
   type: GET_MESSAGES_START,
});

export const getMessagesSuccess = (messages) => ({
   type: GET_MESSAGES_SUCESS,
   payload: messages,
});

export const getMessagesError = (error) => ({
   type: GET_MESSAGES_ERROR,
   payload: error,
});

