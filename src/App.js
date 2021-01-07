import Navigation from '@components/Navigation'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import './App.css'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
