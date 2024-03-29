
import React, { useState } from "react";
import './ChatListUser.css'
function ChatListUser({user, registered, setSelectedUser}) {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  let latestTimestamp=""
  let lastMessage=""
  if (user.messages.length !== 0) {
  const sortedMessages = user.messages.sort(function(a, b) {
    return b.timestamp - a.timestamp; 
  });

    latestTimestamp = sortedMessages[0].timestamp.toLocaleString();
    lastMessage = sortedMessages[0].content;
}
    const matchedUser = registered.find((registeredUser) => registeredUser.username === user.username);
    const handleClick = () => {
        const matchedUserList = registered.find((registeredUser) => registeredUser.username === user.username);
        setSelectedUser(matchedUserList);
    }
  return (
    <li className={`list-group-item ${hovered ? 'chosen' : ''}`}  onClick={handleClick}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="contact-menu-li">
        <span className="contact-menu-image">
          <img className="profileimg" src={matchedUser.picture} alt={user.display} />
        </span>
        <span className="contact-menu-name"> {matchedUser.display} </span>
        <span className="contact-menu-date"> {latestTimestamp} </span>
        <div className="contact-menu-last-message">{lastMessage}</div>
      </div>
    </li>
  );
}
export default ChatListUser;