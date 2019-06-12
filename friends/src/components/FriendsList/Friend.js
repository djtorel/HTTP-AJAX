/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const container = css`
  margin: 15px auto 0 auto;
  max-width: 50%;
  padding: 20px;
  border: solid black 1px;
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
  min-width: 60%;
`;

const Friend = ({ id, name, age, email }) => (
  <div css={container}>
    <div css={friendWrapper}>
      <div>Name: {name}</div>
      <div css={ageDiv}>Age: {age}</div>
      <div>Email: {email}</div>
    </div>
  </div>
);

export default Friend;
