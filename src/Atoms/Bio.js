import React from 'react';

class Bio extends React.Component {
  render () {
    return (
      <div className="Bio">
        { this.props.bio }
      </div>
    )
  }
}

export default Bio
