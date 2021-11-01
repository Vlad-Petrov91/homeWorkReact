export const messagesSelector = (roomId) => (state) => {
   console.log(state.messages.messages[roomId], roomId)
   return (state.messages.messages[roomId] || []);
};