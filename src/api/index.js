// import AuthContext from '@context/AuthContext'
import axios from 'axios'

export const BASE_URL = `https://api.github.com/`
// eslint-disable-next-line import/prefer-default-export
export const API = axios.create({
  baseURL: BASE_URL,
})

function parseError(messages) {
  // error
  if (messages) {
    if (messages instanceof Array) {
      return Promise.reject(new Error({ messages }))
    }
    return Promise.reject(new Error({ messages: [messages] }))
  }
  return Promise.reject(new Error({ messages: ['Server error'] }))
}

/**
 * parse response
 */
function parseBody(response) {
  //  if (response.status === 200 && response.data.status.code === 200) { // - if use custom status code
  if (response.status === 200) {
    return response.data
  }
  return this.parseError(response.data.messages)
}

// request header
API.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
)

// response parse
API.interceptors.response.use(
  (response) => parseBody(response),
  (error) => {
    // return Promise.reject(error)
    if (error.response) {
      return parseError(error.response.data)
    }
    return Promise.reject(error)
  },
)
