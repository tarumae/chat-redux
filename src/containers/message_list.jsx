import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';
import Message from '../components/message';

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages(this.props.selectedChannel)
  }
  
  componentDidMount() {
    this.interval = setInterval(() => this.props.fetchMessages(this.props.selectedChannel), 300)
  }
  
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  

  render() {
    return (
      <div>
        {this.props.messages.map(message => {
          return <Message key={message.created_at} message={message} />
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);