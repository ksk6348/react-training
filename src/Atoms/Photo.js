import React from 'react';

class Photo extends React.Component {
  render () {
    return (
      <div className="Photo">
        <img src={this.props.photo} width="256" height="256" alt="img"></img>
      </div>
    )
  }
}

export default Photo
