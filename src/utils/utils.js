const getHistory = () => {
  const history = localStorage.getItem('history');

  if (!history) return undefined;

  return JSON.parse(history);
};

const setHistory = (history) => {
  const chatHistory = JSON.stringify(history);

  if (!chatHistory) return;

  localStorage.setItem('history', chatHistory);
};

const getUser = () => {
  const value = sessionStorage.getItem('user');

  if (!value) return undefined;

  return value;
};

const setUser = (value) => {
  if (!value) return;

  sessionStorage.setItem('user', value);
};

export { getHistory, setHistory, getUser, setUser };
