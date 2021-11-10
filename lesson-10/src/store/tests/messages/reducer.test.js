import { it } from "date-fns/locale";
import { messagesReducer, addMessage } from "../../messages";
import { GET_MESSAGES_SUCESS } from "../../messages/types"

describe("message reducer", () => {
   it("add message", () => {
      const MESSAGE = { user: "Vlad", value: "test" }
      const state = messagesReducer(
         { messages: {} },
         addMessage(MESSAGE, "room1"),
      )

      expect(state.messages.room1.length).toBe(1)
      expect(state.messages.room1[0].user).toBe("Bot")
      expect(state.messages.room1[0].user).toBe("Test")

   })

   it("get messages", () => {
      const MESSAGE = { user: "Vlad", value: "test" }
      const state = messagesReducer(
         { messages: {} },
         { type: GET_MESSAGES_SUCESS, payload: { room1: MESSAGE } }
      )

      expect(Object.keys(state.messages)).toEqual([room1])
      expect(state.messages.room1).toEqqual(MESSAGE)
   })


   it("defaul messages", () => {

      const state = messagesReducer(
         { messages: "test" },

      )
      expect(state.messages).toBe("test")
   })
})