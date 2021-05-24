import PropTypes from 'prop-types'

const Auxilliary = ({ className, ...props }) => {
  return (
    <div data-testid='aux-parent-div' className={className}>
      {props.children}
    </div>
  )
}

Auxilliary.propTypes = {
  children: PropTypes.arrayOf(PropTypes.oneOfType(
    [
      PropTypes.element,
      PropTypes.bool
    ]
  )).isRequired,
  className: PropTypes.string.isRequired
}

export default Auxilliary
