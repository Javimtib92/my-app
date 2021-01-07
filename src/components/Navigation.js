import Navbar from '@components/Navbar/Navbar'
import About from '@pages/About'
import Example from '@pages/Example'
import { Flex } from '@ui'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
} from 'react-router-dom'

export default function Navigation() {
  return (
    <Router>
      <div>
        <Navbar
          leftLinks={
            <Flex>
              <div style={{ marginRight: '16px' }}>
                <RouterLink to="/" style={{ color: 'white' }}>
                  Home
                </RouterLink>
              </div>
              <div>
                <RouterLink to="/about" style={{ color: 'white' }}>
                  About
                </RouterLink>
              </div>
            </Flex>
          }
          rightLinks={
            <div>
              <RouterLink to="/menu" style={{ color: 'white' }}>
                Menu
              </RouterLink>
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
