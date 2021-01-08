import PropTypes from 'prop-types'
import { Component } from 'react'

import './ErrorBoundary.scss'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    const { errorInfo, error } = this.state
    const { children } = this.props

    if (errorInfo) {
      // Error path
      return (
        <div className="error-boundary">
          <h2 className="error-boundary__title">Something went wrong.</h2>
          <details className="error-boundary__details">
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      )
    }
    // Normally, just render children
    return children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
}
