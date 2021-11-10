import { ChatList } from "./index"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { reducer } from "../../store/createStore"
import { createStore } from "redux"


//const renderWithRedax = () => { }

describe("chat", () => {
   it("shold render Chat without props", () => {
      const store = createStore(reducer, {
         messages: {
            messages: {
               room1: [{ user: "Vlad", value: "Test message" }],
            }
         }
      })


      const result = render(<Provider store={store}><ChatList title={"room1"} /></Provider>)
      console.log("result", result)
   })
})