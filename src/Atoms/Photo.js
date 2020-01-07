import React from 'react';

class Photo extends React.Component {
  render () {
    return (
      <div className="Photo">
        <img src={this.props.photo} width="512" height="512" alt="img"></img>
      </div>
    )
  }
}

export default Photo
