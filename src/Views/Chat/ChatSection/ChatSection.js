import React from 'react';
import ChatBubble from "./ChatBubble/ChatBubble";

class ChatSection extends React.Component {
  render() {
    let floatDirection = (this.props.recepient) ? "mr-auto" : "ml-auto";

    return (
      <div className={"flex flex-col justify-end " + floatDirection}>
        <div className={floatDirection}>
          <img
            src={this.props.profilePicture}
            className={"h-10 w-10 rounded-full bg-cover shadow-lg mb-2"}
          />
          <div className={"text-sm text-gray-700 mb-2"}>{this.props.time}</div>
        </div>
        {this.props.messages.map((message, _) => {
          return (
            <ChatBubble recepient={this.props.recepient} className={floatDirection} message={message} />
          );
        })}
        
      </div>
    )
  }
}

export default ChatSection;