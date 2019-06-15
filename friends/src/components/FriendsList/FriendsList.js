import React from 'react';
import Friend from './Friend';

const FriendsList = ({ friends, selectFriendUpdate, deleteFriend }) => (
  <div>
    {friends.map(({ id, name, age, email }) => (
      <Friend
        key={id}
        name={name}
        age={age}
        email={email}
        id={id}
        selectFriendUpdate={selectFriendUpdate}
        deleteFriend={deleteFriend}
      />
    ))}
  </div>
);

export default FriendsList;
