import { css } from "@emotion/react";

export const Background = css`
  margin-top: 56px;
  padding-top: 10px;
  background-color: #fdf8f8;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    width: calc(100% - 20px);
    text-align: left;
    padding-left: 20px;
    margin: 10px 0;
  }
`;

export const CommentButton = css`
  background-color: #F25F5C;
  color: white;
  border-radius: 8px;
  padding: 3px 5px;
  margin: 10px;
`;

export const LiveBox = css`
  width: 90%;
  max-width: 800px;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  margin: 30px;
  padding: 50px 5px;
  background-color: #323232;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const LiveImage = css`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

export const CommentStyle = (x: number, y: number, index: number) => {
  const length = Math.sqrt((x ** 2) + (y ** 2));

  const style = css`
    position: absolute;
    top: 50%;
    left: 50%;
    font-weight: bold;
    color: white;
    font-size: 30px;
    text-shadow: -1px -1px #000, 1px -1px #000,	-1px 1px #000, 1px 1px #000;
    transform: translateY(-50%) translateX(-50%);
    animation-name: move-${index};
    animation-duration: ${100 / length}s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    @keyframes move-${index} {
      from {
        transform: translateX(calc(${-x/length * 600}px - 50%)) translateY(calc(${-y/length * 600}px - 50%));
      }
      to {
        transform: translateX(calc(${x/length * 600}px - 50%)) translateY(calc(${y/length * 600}px - 50%));
      }
    }
  `;
  return style;
}
