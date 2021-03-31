import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div>
        <p>{this.props.message.author} <span>{this.props.message.created_at}</span></p>
        <p>{this.props.message.content}</p>
      </div>
    )
  }
};

export default Message;