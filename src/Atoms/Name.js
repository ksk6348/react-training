import React from 'react';

class Name extends React.Component {
  render () {
    return (
      <div className="Name">
        { this.props.name }
      </div>
    )
  }
}

export default Name
