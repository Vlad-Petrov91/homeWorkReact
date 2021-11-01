import { HANDLE_CHANGE_MESSAGE_VALUE, CREATE_CONVERSATION, CLEAR_INPUT } from "./types"


const initalState = {
   conversations: [
      { title: "room1", value: "" },
      { title: "room2", value: "" },
   ],
};

const updateConversations = (state, roomId, value) =>
   state.conversations.map((conversation) => {
      return conversation.title === roomId
         ? { ...conversation, value }
         : conversation;
   });


export const conversationsReducer = (state = initalState, action) => {
   switch (action.type) {
      case HANDLE_CHANGE_MESSAGE_VALUE:
         return {
            ...state,
            conversations: state.conversations.map((conversation) => {
               return conversation.title === action.payload.roomId
                  ? { ...conversation, value: action.payload.value }
                  : conversation;
            })
         };
      case CREATE_CONVERSATION:
         return {
            ...state,
            conversations: [...state.conversations, { title: action.payload, value: "" }
            ],
         };
      case CLEAR_INPUT:
         return {
            ...state,
            conversations: updateConversations(state, action.payload, ""),
         }
      default:
         return state;
   }
};