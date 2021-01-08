import { createContext } from 'react'

const AuthContext = createContext({
  token: null,
  isLoggedIn: false,
  storeToken: () => {},
})

export default AuthContext
