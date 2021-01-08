import AuthContext from '@context/AuthContext'
import { useLocalStorage } from '@hooks'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import './App.scss'
import AppRouter from './AppRouter'

const queryClient = new QueryClient()

export default function App() {
  // We get the token and the setter to set the token on demand
  const [token, setToken] = useLocalStorage('auth')

  const storeToken = () => {
    setToken({ token: true })
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={{ isLoggedIn: !!token, storeToken }}>
        <AppRouter />
        <ReactQueryDevtools initialIsOpen={false} />
      </AuthContext.Provider>
    </QueryClientProvider>
  )
}
