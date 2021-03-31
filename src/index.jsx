// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import { initialState } from './actions';
// Reducers
import selectedChannelReducer from './reducers/selectedchannel_reducer';
import channelsReducer from './reducers/channels_reducer';
import currentUserReducer from './reducers/currentuser_reducer';
import messagesReducer from './reducers/messages_reducer';
import messageFormReducer from './reducers/messageform_reducer';
// State and reducers
const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  currentUser: currentUserReducer,
  selectedChannel: selectedChannelReducer,
  messageForm: messageFormReducer
});

const middlewares = applyMiddleware(logger, reduxPromise)
// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
