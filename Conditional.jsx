import React, { PropTypes } from 'react';

class Conditional extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.condition === false && nextProps.condition === false) {
      return false;
    }

    return true;
  }

  render() {
    return (this.props.condition) ? this.props.children : null;
  }
}

Conditional.propTypes = {
  condition: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
};

export default Conditional;
