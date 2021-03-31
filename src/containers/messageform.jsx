import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { createMessage } from '../actions';
import { connect } from 'react-redux';

class MessageForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      author: "",
      content: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (event) => {
    this.setState({ content: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.author, this.state.content)
  }

  render() { 
      return <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.content} onChange={this.handleChange} />
        <input type="submit" value="Submit"/>
      </form>
  }
}

function mapStateToProps(state) {
  return {
    author: state.currentUser,
    selectedChannel: state.selectedChannel
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);