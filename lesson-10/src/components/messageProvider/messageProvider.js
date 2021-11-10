// import { useMemo, useState } from "react";
// import { useParams } from "react-router-dom";

// export function MessageProvider() {
//    const { roomId } = useParams();

//    const [messages, setMessages] = useState({
//       chat1: [{ value: "Hello", user: "Vlad" }],
//       chat2: [{ value: "Hi", user: "Vlad" }],
//       chat3: [{ value: "11", user: "Vlad" }],
//    })

//    const state = useMemo(() => {
//       return {
//          messages: messages[roomId] ?? []
//       }
//    }, [roomId, messages]);

//    const actions = useMemo(() => {
//       return {

//          sendMessage: (message) => {
//             console.log(message)
//             const newMessage = { ...message }
//             setMessages((messages) => {
//                console.log(messages)
//                return {
//                   ...messages,
//                   [roomId]: [...(messages[roomId] ?? []), newMessage],
//                };
//             });
//          },
//       };
//    }, [roomId]);

//    return children([state, actions]);
// }