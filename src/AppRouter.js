import PrivateRoute from '@components/PrivateRoute/PrivateRoute'
import { useAuth } from '@hooks'
import { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

const Login = lazy(() => import('@pages/Login'))
const Navigation = lazy(() => import('@components/Navigation/Navigation'))

export default function AppRouter() {
  const { isLoggedIn } = useAuth()

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            {isLoggedIn ? <Redirect to="/dashboard/home" /> : <Login />}
          </Route>

          <PrivateRoute path="/dashboard">
            <Navigation />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Router>
  )
}
