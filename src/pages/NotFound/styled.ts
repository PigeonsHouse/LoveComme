import { css } from "@emotion/react";

export const Background = css`
  margin-top: 56px;
  background-color: #fdf8f8;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
`;

export const Content = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  p {
    margin: 0;
    font-size: 60px;
    font-weight: bold;
    color: #a92421;
  }
`;
