import React from 'react';
import './Chat.scss';
import 'styles/colors.scss';
import ChatSection from './ChatSection/ChatSection';

class Chat extends React.Component {
  render() {
    return (
      <div className="flex flex-col px-4 lg:px-0 w-full h-full h-20 max-w-5xl">
        <span className="text-md">You are chatting with</span>
        <span className="text-2xl font-bold">Victor Frankenstein</span>
        <span className="text-lg font-semibold -my-1 mb-4">PHD in Chemistry</span>
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
          profilePicture="https://hcplive.s3.amazonaws.com/v1_media/_image/happydoctor.jpg"
        />
        <ChatSection
          recepient={true}
          time="9:54"
          messages={[
            "no",
          ]}
          profilePicture="https://hcplive.s3.amazonaws.com/v1_media/_image/happydoctor.jpg"
        />
      </div>
    );
  }
}

export default Chat;