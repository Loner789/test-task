// Imports:
import React from 'react';
import ChatWindow from '../ChatWindow/ChatWindow';
import MessageInput from '../MessageInput/MessageInput';
import UserNameInput from '../UserNameInput/UserNameInput';

// Main component:
const Main = (props) => {
  const { user, currentUser, onUserChange, onMessageSend, chatHistory } = props;

  return (
    <section className='d-flex flex-column h-75' aria-label='Контент.'>
      <UserNameInput
        user={user}
        currentUser={currentUser}
        onUserChange={onUserChange}
      />
      <ChatWindow chatHistory={chatHistory} />
      <MessageInput onMessageSend={onMessageSend} />
    </section>
  );
};

export default Main;
