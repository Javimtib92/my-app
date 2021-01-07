/* eslint-disable react/jsx-props-no-spreading */
import { Flex } from '@ui'
import PropTypes from 'prop-types'
import { useEffect } from 'react'

import './Navbar.scss'

/** Example component for UI, this is subjective to change and the only purpose of this is to demonstrate the
 * concept of UI components
 */
export default function Navbar({ leftLinks, rightLinks, ...props }) {
  useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener('scroll', headerColorChange)
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener('scroll', headerColorChange)
      }
    }
  })

  const headerColorChange = () => {}

  return (
    <div className="ui-components__navbar" {...props}>
      <Flex
        className="ui-components__navbar-container"
        align="center"
        justify="between"
      >
        {leftLinks}
        {rightLinks}
      </Flex>
    </div>
  )
}

Navbar.defaultProps = {
  color: 'white',
}

Navbar.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'transparent',
    'white',
    'rose',
    'dark',
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // this.props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // this.props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      'primary',
      'info',
      'success',
      'warning',
      'danger',
      'transparent',
      'white',
      'rose',
      'dark',
    ]).isRequired,
  }),
}
