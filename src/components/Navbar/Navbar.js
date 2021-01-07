/* eslint-disable react/jsx-props-no-spreading */
import { Flex } from '@ui'
import PropTypes from 'prop-types'

import './Navbar.scss'

/** Example component for UI, this is subjective to change and the only purpose of this is to demonstrate the
 * concept of UI components
 */
export default function Navbar({ color, leftLinks, rightLinks, ...props }) {
  return (
    <div className={['navbar', `navbar-color-${color}`].join(' ')} {...props}>
      <Flex className="navbar__container" align="center" justify="between">
        {leftLinks}
        {rightLinks}
      </Flex>
    </div>
  )
}

Navbar.defaultProps = {
  color: 'dark',
}

Navbar.propTypes = {
  color: PropTypes.oneOf(['blue', 'red', 'dark']),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
}
