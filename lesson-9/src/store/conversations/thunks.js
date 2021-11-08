import {
   getConversationsStart,
   getConversationsSuccess,
   getConversationsError,
} from "./actions";

export const getConversationsFB = () => async (dispatch, _, api) => {
   try {
      dispatch(getConversationsStart());
      const data = await api.getConversationsApi();

      const conversations = [];

      data.forEach((snap) => {
         conversations.push(snap.val());
      });

      dispatch(getConversationsSuccess(conversations));
   } catch (e) {
      dispatch(getConversationsError("Error"));
   }
};