import React from 'react';
import './Chat.scss';
import 'styles/colors.scss';
import ChatSection from './ChatSection/ChatSection';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.scrollEnd = React.createRef();
  }

  scrollToEnd() {
    this.scrollEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    this.scrollToEnd();
  }

  componentDidUpdate() {
    this.scrollToEnd();
  }

  render() {
    return (
      <div className="relative">
        <div className="flex flex-col px-4 lg:px-0 lg:pr-4 w-full h-full h-20">
          <span className="text-md">You are chatting with</span>
          <span className="text-2xl font-bold">Victor Frankenstein</span>
          <span className="text-lg font-semibold -my-1 mb-4">PHD in Chemistry</span>
          <div className="messages">
            <ChatSection
              recepient={true}
              time="9:52"
              messages={[
                "Hello!",
                "I am a doctor!"
              ]}
              profilePicture="https://hcplive.s3.amazonaws.com/v1_media/_image/happydoctor.jpg"
            />
            <ChatSection
              recepient={false}
              time="9:52"
              messages={[
                "I am having bad headaches",
                "Any idea of what it might be?"
              ]}
              profilePicture="https://pbs.twimg.com/media/ERQuXlhXsAAUwnG?format=jpg&name=large"
            />
            <ChatSection
              recepient={true}
              time="9:54"
              messages={[
                "Please go into further detail",
              ]}
              profilePicture="https://hcplive.s3.amazonaws.com/v1_media/_image/happydoctor.jpg"
            />
          </div>
          <div className="h-16" ref={(el) => { this.scrollEnd = el }} />
          <div className="bottom-0 fixed w-full lg:w-3/4 xl:w-4/5 right-0 input-bar">
            <input
              id="searchall"
              className="rounded-t-lg shadow-sm w-full h-12 text-base transitions-colors duration-100 ease-in-out outline-none text-gray-600 placeholder-gray-600 pl-4 pr-4 block appearance-none leading-normal ds-input"
              placeholder="Send Message"
            ></input>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;