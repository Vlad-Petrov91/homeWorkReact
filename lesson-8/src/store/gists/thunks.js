import { getGistStart, getGistSuccess, getGistError, getGistByNameStart, getGistByNameError, getGistByNameSuccess } from "./actions"

export const getGists =
   (page = 1) =>
      async (dispatch, _, api) => {
         try {
            dispatch(getGistStart())

            const { data } = await api.getGistsApi(page)

            dispatch(getGistSuccess(data))
         } catch {
            dispatch(getGistError("error"))
         }
      }

export const getGistsByName =
   (name = "") =>
      async (dispatch, _, api) => {
         try {
            dispatch(getGistByNameStart())

            const { data } = await api.searchGistsByUserNameApi(name)

            dispatch(getGistByNameSuccess(data))
         } catch {
            dispatch(getGistByNameError("error gists by name"))
         }
      }