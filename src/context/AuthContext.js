import { createContext } from 'react'

const AuthContext = createContext({
  isLoggedIn: false,
  storeToken: () => {},
})

export default AuthContext
