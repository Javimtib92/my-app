/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types'

import './Link.scss'

/** Example component for UI, this is subjective to change and the only purpose of this is to demonstrate the
 * concept of UI components
 */
function Link({ children, ...props }) {
  return (
    <a className="ui-components__link" {...props}>
      {children}
    </a>
  )
}

Link.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
}

export default Link
