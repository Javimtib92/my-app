import { getReactQueryRepoData } from '@api/github'
import { Link } from '@ui'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import './App.css'
import logo from './logo.svg'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

function Example() {
  const { isLoading, error, data } = useQuery('repoData', getReactQueryRepoData)

  if (isLoading) return 'Loading...'

  if (error) return `An error has occurred: ${error.message}`

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            what="on"
            the=""
            name=""
          />
          <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <strong>👀 {data.subscribers_count}</strong>{' '}
            <strong>✨ {data.stargazers_count}</strong>{' '}
            <strong>🍴 {data.forks_count}</strong>
          </div>
          <Link
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Link>
        </header>
      </div>
    </QueryClientProvider>
  )
}
