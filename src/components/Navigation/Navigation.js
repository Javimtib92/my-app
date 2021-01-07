import Navbar from '@components/Navbar/Navbar'
import { Flex } from '@ui'
import { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
} from 'react-router-dom'

import './Navigation.scss'

const About = lazy(() => import('@pages/About'))
const Example = lazy(() => import('@pages/Example'))

export default function Navigation() {
  const { path, url } = useRouteMatch()

  return (
    <Router>
      <div className="navigation">
        <Navbar
          leftLinks={
            <Flex>
              <div className="navigation__item">
                <NavLink
                  to={`${url}/home`}
                  className="navigation__link"
                  activeClassName="selected"
                >
                  Home
                </NavLink>
              </div>
              <div className="navigation__item">
                <NavLink
                  to={`${url}/about`}
                  className="navigation__link"
                  activeClassName="selected"
                >
                  About
                </NavLink>
              </div>
            </Flex>
          }
          rightLinks={
            <div className="navigation__item">
              <NavLink
                to={`${url}/menu`}
                className="navigation__link"
                activeClassName="selected"
              >
                Menu
              </NavLink>
            </div>
          }
        />

        <Suspense fallback={<div>Loading...</div>}>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path={`${path}/home`}>
              <Example />
            </Route>
            <Route path={`${path}/about`}>
              <About />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  )
}
