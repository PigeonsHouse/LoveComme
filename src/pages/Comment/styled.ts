import { css } from "@emotion/react";

export const Background = css`
  background-color: #fdf8f8;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: hidden;
  padding-bottom: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1s padding-bottom;
`;

export const MoveBackground = css`
  padding-bottom: 0;
`;

export const BackButton = css`
  position: absolute;
  bottom: 10px;
  text-align: center;
  padding: 10px 30px;
  border-radius: 6px;
  background-color: #F25F5C;
  color: white;
`;

export const CommentBox = css`
  position: absolute;
  bottom: 0;
  width: calc(100% - 20px);
  padding: 10px;
  background-color: #F2D7D5;
  height: 56px;
  padding: 10px;
  display: flex;
  gap: 10px;
  transition: 1s bottom;
  textarea {
    resize: none;
    width: 60%;
    height: 90%;
    flex: 1;
    outline: none;
    border-radius: 6px;
  }
  input {
    width: 80px;
    border: none;
    background-color: #F25F5C;
    color: white;
    border-radius: 6px;
  }
  div {
    width: 50px;
    border: none;
    background-color: white;
    color: #F25F5C;
    border-radius: 6px;
    border: 1px solid #F25F5C;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }
`;

export const ReadyCommentBox = css`
  bottom: -76px;
`;

export const CommentItem = css`
  background-color: #f35f2a;
  color: white;
  border-radius: 6px;
  padding: 5px 20px;
  -webkit-user-select: none;
  user-select: none;
  font-size: 20px;
`

export const MovableCommentItem = css`
  z-index: 10;
  position: fixed;
`;
