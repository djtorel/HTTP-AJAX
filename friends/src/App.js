import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import FriendsList from './components/FriendsList/FriendsList';

const API_URL = 'http://localhost:5000';

const App = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/friends`)
      .then(res => {
        setFriends([...res.data]);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      {console.log(friends)}
      <FriendsList friends={friends} />
    </div>
  );
};

export default App;
