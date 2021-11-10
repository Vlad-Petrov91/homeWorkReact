import { getGists, getGistsByName, getGistStart, getGistSuccess, getGistError, getGistByNameStart, getGistByNameError, getGistByNameSuccess } from "../../gists"


describe("get gists thunks", () => {
   it("get gist succes", async () => {
      const page = 1
      const dispatch = jest.fn()
      const getGistsApi = jest.fn().mockResolvedValue({ data: "ok" })


      const thunk = getGists(page)

      await thunk(dispatch, hull, { getGistsApi })

      expect(getGistsApi).toBeCalledTimes(1)
      expect(getGistsApi).toBeCalledWith(page)

      expect(dispatch).toBeCalledTimes(2)

      expect(dispatch).toHaveBeenNthCalledWith(1, getGistStart)
      expect(dispatch).toHaveBeenNthCalledWith(2, getGistSuccess("ok"))
   })
})

describe("get gists error", () => {
   it("get gist succes", async () => {
      const page = 1
      const dispatch = jest.fn()
      const getGistsApi = jest.fn().mockRejectedValue({ error: "error" })


      const thunk = getGists(page)

      await thunk(dispatch, hull, { getGistsApi })

      expect(getGistsApi).toBeCalledTimes(1)
      expect(getGistsApi).toBeCalledWith(page)

      expect(dispatch).toBeCalledTimes(2)

      expect(dispatch).toHaveBeenNthCalledWith(1, getGistStart)
      expect(dispatch).toHaveBeenNthCalledWith(2, getGistError({ error: "error" }))
   })
})

