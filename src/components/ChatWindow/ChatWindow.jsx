// Imports:
import React, { useRef, useLayoutEffect } from 'react';

// ChatWindow component:
const ChatWindow = (props) => {
  // Constants:
  const { chatHistory } = props;
  const scrollPointer = useRef(null);

  // Side-effects:
  useLayoutEffect(() => {
    scrollPointer.current.scrollIntoView();
  }, [chatHistory]);

  return (
    <ul className='container list-unstyled mb-0 h-100 overflow-auto' id='ul'>
      {chatHistory.length ? (
        chatHistory.map((item) => (
          <li key={item.time}>
            <span className='text-primary font-weight-bold'>
              {item.currentUser}:
            </span>{' '}
            {item.message}
          </li>
        ))
      ) : (
        <p className='text-center m-0'>В этом чате ещё нет сообщений!</p>
      )}
      <div className='invisible' ref={scrollPointer} />
    </ul>
  );
};

export default ChatWindow;
