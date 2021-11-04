import { HANDLE_CHANGE_MESSAGE_VALUE, CREATE_CONVERSATION, CLEAR_INPUT } from "./types"

export const handleChangeMessageValue = (value, roomId) => ({
   type: HANDLE_CHANGE_MESSAGE_VALUE,
   payload: { value, roomId },
});

export const createConversation = (name) => ({
   type: CREATE_CONVERSATION,
   payload: name,
});

export const clearInput = (roomId) => ({
   type: CLEAR_INPUT,
   payload: roomId,
});