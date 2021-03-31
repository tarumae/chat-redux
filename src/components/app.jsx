import React from 'react';
import MessageList from '../containers/message_list';
import MessageForm from '../containers/messageform';

const App = () => {
  return (
    <div className="app">
      <MessageList />
      <MessageForm />
    </div>
  );
};

export default App;
