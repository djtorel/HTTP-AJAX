/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const container = css`
  margin: 15px auto 0 auto;
  max-width: 400px;
  padding: 20px;
  border: solid #9a9a9a 1px;
  border-radius: 3px;
  background-color: #3a3a3a;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ageDiv = css`
  margin: 10px 0;
`;

const friendWrapper = css`
  min-width: 70%;
`;

const buttons = css`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Friend = ({ id, name, age, email, selectFriendUpdate, deleteFriend }) => (
  <div css={container}>
    <div css={friendWrapper}>
      <div>Name: {name}</div>
      <div css={ageDiv}>Age: {age}</div>
      <div>Email: {email}</div>

      <div css={buttons}>
        <button onClick={() => selectFriendUpdate(id)}>Update</button>
        <button onClick={() => deleteFriend(id)}>Delete</button>
      </div>
    </div>
  </div>
);

export default Friend;
