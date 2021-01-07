import Navbar from '@components/Navbar/Navbar'
import { Flex } from '@ui'
import { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom'

import './Navigation.scss'

const About = lazy(() => import('@pages/About'))
const Example = lazy(() => import('@pages/Example'))

export default function Navigation() {
  return (
    <Router>
      <div className="navigation">
        <Navbar
          leftLinks={
            <Flex>
              <div className="navigation__item">
                <NavLink
                  to="/"
                  exact
                  className="navigation__link"
                  activeClassName="selected"
                >
                  Home
                </NavLink>
              </div>
              <div className="navigation__item">
                <NavLink
                  to="/about"
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
                to="/menu"
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
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Example />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  )
}
