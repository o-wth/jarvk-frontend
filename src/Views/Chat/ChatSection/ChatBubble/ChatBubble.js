import React from 'react';
import './ChatBubble.scss';
import 'styles/colors.scss';
import classNames from 'classnames';

class ChatBubble extends React.Component {
  render() {
    let bubbleClassName = classNames(
      "py-2 px-4 mb-2 text-lg chat-bubble rounded-lg shadow-lg",
      [
        this.props.className,
        (this.props.recepient) ? "bg-accent text-white" : "bg-white text-dark",
      ]
    );

    return (
      <div className={bubbleClassName}>
        {this.props.message}
      </div>
    )
  }
}

export default ChatBubble;