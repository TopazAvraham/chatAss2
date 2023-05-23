function ChatBodyMessage({messageContent, sender,created}) {
 return (
    <>  
    <div className={sender +' messages'}>
          <div className="message">{messageContent}</div>
    </div>

    </>
 );
}
export default ChatBodyMessage;


