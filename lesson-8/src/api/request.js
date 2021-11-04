import axios from "axios"

const BASE_URL = "https://api.github.com"

class Request {
   constructor(token) {
      this.token = token
      this.request = axios.create({
         baseURL: BASE_URL
      })
   }

   setToken = (token) => {
      this.token = token
   }

   removeToken = (token) => {
      this.token = null
   }

   requestWithToken = () => {
      return {
         headers: {
            "x-token": this.token
         }
      }
   }

   get = (url, withAuth) => {
      let config = {}

      if (withAuth) {
         config = { ...config, ...this.requestWithToken() }
      }

      return this.request.get(url, config)
   }
   post = (url, params, withAuth) => {
      let config = {}

      if (withAuth) {
         config = { ...config, ...this.requestWithToken() }
      }
      return this.request.post(url, params, config)
   }
}

export const request = new Request('token')