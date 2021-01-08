import { getReactQueryRepoData } from '@api/github'
import { Link } from '@ui'
import { useQuery } from 'react-query'

import logo from '../logo.svg'

export default function Example() {
  const { isLoading, error, data } = useQuery('repoData', getReactQueryRepoData)

  if (isLoading) return 'Loading...'

  if (error) return `An error has occurred: ${error.messages[0]?.message}`

  return (
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
  )
}
