import PropTypes from 'prop-types'

import './Flex.css'

export default function Flex(props) {
  const classes = {
    dir: {
      row: 'row',
      column: 'column',
    },
    justify: {
      start: 'flex-start',
      center: 'center',
      end: 'flex-end',
      between: 'space-between',
      around: 'space-around',
    },
    align: {
      start: 'flex-start',
      center: 'center',
      end: 'flex-end',
    },
  }

  const { children, dir, align, justify, className } = props

  return (
    <div
      className={[
        'ui-components__flex',
        classes.dir[dir],
        `justify-${classes.justify[justify]}`,
        `align-${classes.align[align]}`,
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}

Flex.defaultProps = {
  dir: 'row',
  align: 'start',
  justify: 'start',
}

Flex.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
  dir: PropTypes.string,
  align: PropTypes.string,
  justify: PropTypes.string,
  className: PropTypes.string,
}
