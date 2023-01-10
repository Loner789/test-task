// Imports:
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { getHistory, setHistory, getUser, setUser } from '../../utils/utils';

// Main component:
const App = () => {
  const [currentUser, setCurrentUser] = useState('USER');
  const [chatHistory, setChatHistory] = useState([]);
  const user = getUser();

  // Side-effects:
  useEffect(() => {
    window.addEventListener('storage', () => {
      loadHistory();
    });
  }, []);

  useEffect(() => {
    loadHistory();
  }, []);

  useEffect(() => {
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  // Functions:
  const loadHistory = () => {
    const history = getHistory();

    if (!history) return;

    setChatHistory(history);
  };

  const handleMessageSend = (message) => {
    const data = {
      currentUser: currentUser,
      message: message,
      time: Date.now(),
    };
    const newHistory = [...chatHistory, data];

    setChatHistory(newHistory);
    setHistory(newHistory);
  };

  const handleUserChange = (name) => {
    setCurrentUser(name);
    setUser(name);
  };

  return (
    <div className='vh-100 d-flex flex-column justify-content-evenly'>
      <Header />
      <Main
        user={user}
        currentUser={currentUser}
        onUserChange={handleUserChange}
        onMessageSend={handleMessageSend}
        chatHistory={chatHistory}
      />
    </div>
  );
};

export default App;
