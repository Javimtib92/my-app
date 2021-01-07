import { useLocalStorage } from '@hooks'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({ children, ...rest }) {
  const [auth] = useLocalStorage('auth')
  console.log(auth)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth && auth.token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
}
