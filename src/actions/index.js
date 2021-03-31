// TODO: add and export your own actions
export const initialState = {
  messages: [
    {
      "author":"anonymous92",
      "content":"Hello world!",
      "created_at":"2017-09-26T23:03:16.365Z"
    },
    {
      "author":"anonymous77",
      "content":"My name is anonymous77",
      "created_at":"2017-09-26T23:03:21.194Z"
    }
  ],
  channels: ['testingChannel', 'react', 'paris'],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'testingChannel',
};

export function fetchMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());
  return {
    type: "FETCH_MESSAGES",
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  const body = { channel: channel, author: author, content: content }
  console.log(body)
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json());

  return {
    type: "CREATE_MESSAGE",
    payload: promise
  }
}