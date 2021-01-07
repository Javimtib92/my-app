import Navbar from '@components/Navbar/Navbar'
import About from '@pages/About'
import Example from '@pages/Example'
import { Flex } from '@ui'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom'

export default function Navigation() {
  return (
    <Router>
      <div>
        <Navbar
          leftLinks={
            <Flex>
              <div style={{ marginRight: '16px' }}>
                <NavLink to="/" activeClassName="selected">
                  Home
                </NavLink>
              </div>
              <div>
                <NavLink to="/about" activeClassName="selected">
                  About
                </NavLink>
              </div>
            </Flex>
          }
          rightLinks={
            <div>
              <NavLink to="/menu" activeClassName="selected">
                Menu
              </NavLink>
            </div>
          }
        />

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
      </div>
    </Router>
  )
}
