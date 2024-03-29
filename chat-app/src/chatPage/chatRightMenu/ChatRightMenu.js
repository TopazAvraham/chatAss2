import ChatCurrentChatHeader from "./chatCurrentChatHeader/ChatCurrentChatHeader";
import ChatInputMessage from "./chatInputMessage/ChatInputMessage";
import ChatBody from "./chatBody/ChatBody";
import welcome_back from "./welcome_back_gif.gif";
import "./ChatRightMenu.css"
import { useState } from 'react';

function ChatRightMenu({selectedUser, setAuthenticated,authenticated}){
  const[message, setMessage] = useState(true);
  if(selectedUser===null){
  return(
  <div className="col col-8 gif-container">
<img src={welcome_back} className="gif" alt="welcome_back_GIF" />
    </div>
    );
  }
const handleSendMessage = (event) => {
  event.preventDefault();
  const time = new Date();
  const message = event.target[0].value;
  const newMessage = {
    content: message,
    sender: authenticated.username,
    receiver: selectedUser.username,
    timestamp: time
  };
  const updatedAuthenticated = { ...authenticated };
  const otherUserIndex = updatedAuthenticated.users.findIndex(
    (user) => user.username === selectedUser.username
  );
  const thisUserIndex = selectedUser.users.findIndex(
    (user) => user.username === authenticated.username
  );
  updatedAuthenticated.users[otherUserIndex].messages.push(newMessage);
  selectedUser.users[thisUserIndex].messages.push(newMessage);
  
  setAuthenticated(updatedAuthenticated);
  
  event.target[0].value = "";
  setMessage(true);
};

return (
<div className="col col-8" >
          <div className="card">
          <ChatCurrentChatHeader selectedUser={selectedUser}></ChatCurrentChatHeader>
          <ChatBody selectedUser={selectedUser} authenticated={authenticated}></ChatBody>
          </div>
          <form onSubmit={handleSendMessage}>

        <ChatInputMessage message={message} setMessage={setMessage}></ChatInputMessage>
        </form>
        </div>
        );
}
export default ChatRightMenu;