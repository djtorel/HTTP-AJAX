import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import FriendsList from './components/FriendsList/FriendsList';

import FriendForm from './components/FriendForm/FriendForm';

const API_URL = 'http://localhost:5000';

const App = () => {
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);

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

  const selectFriendUpdate = id => {
    setSelectedFriend(friends.filter(friend => friend.id === id)[0]);
  };

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

  const updateFriend = friend => {
    axios
      .put(`${API_URL}/friends/${friend.id}`, friend)
      .then(res => {
        getFriends();
      })
      .catch(err => {
        console.error(err);
      });
  };

  const deleteFriend = id => {
    axios
      .delete(`${API_URL}/friends/${id}`)
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
        <FriendsList
          friends={friends}
          selectFriendUpdate={selectFriendUpdate}
          deleteFriend={deleteFriend}
        />
      </div>

      <div>
        <FriendForm
          addFriend={addFriend}
          friend={selectedFriend}
          updateFriend={updateFriend}
        />
      </div>
    </div>
  );
};

export default App;
// MVP Complete
