import React from 'react';
import Friend from './Friend';

const FriendsList = ({ friends }) => (
  <div>
    {friends.map(({ id, name, age, email }) => (
      <Friend key={id} name={name} age={age} email={email} />
    ))}
  </div>
);

export default FriendsList;
