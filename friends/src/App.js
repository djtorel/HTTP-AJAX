import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import FriendsList from './components/FriendsList/FriendsList';

import FriendForm from './components/FriendForm/FriendForm';

const API_URL = 'http://localhost:5000';

const App = () => {
  const [friends, setFriends] = useState([]);

  const getFriends = () =>
    axios
      .get(`${API_URL}/friends`)
      .then(res => {
        setFriends([...res.data]);
      })
      .catch(err => {
        console.error(err);
      });

  useEffect(() => {
    getFriends();
  }, []);

  const addFriend = friend => {
    axios
      .post(`${API_URL}/friends`, friend)
      .then(res => {
        getFriends();
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div className="App">
      <div>
        <FriendsList friends={friends} />
      </div>

      <div>
        <FriendForm addFriend={addFriend} />
      </div>
    </div>
  );
};

export default App;
