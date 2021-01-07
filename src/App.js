import Navigation from '@components/Navigation/Navigation'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import './App.scss'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
