import React from 'react';
import Friend from './Friend';

const FriendsList = ({ friends, selectFriend }) => (
  <div>
    {friends.map(({ id, name, age, email }) => (
      <div key={id} onClick={() => selectFriend(id)}>
        <Friend
          name={name}
          age={age}
          email={email}
          onClick={() => console.log(id)}
        />
      </div>
    ))}
  </div>
);

export default FriendsList;
