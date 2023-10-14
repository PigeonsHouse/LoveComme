import React, { useCallback, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { BackButton, Background, CommentBox, CommentItem, MovableCommentItem, MoveBackground, ReadyCommentBox } from "./styled";
import { Link } from "@mui/material";

type Position = {
  x: number;
  y: number;
}

export const Comment = () => {
  const { liveId } = useParams();
  const [comment, setComment] = useState<string>("");
  const [isReady, setIsReady] = useState<boolean>(false);
  const [canMove, setCanMove] = useState<boolean>(false);
  const [isGrabbing, setIsGrabbing] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [movement, setMovement] = useState<Position|undefined>();
  const [newPosition, setNewPosition] = useState<Position|undefined>();
  const commentCss = useMemo(() => {
    return [comment.length > 0 ? CommentItem : null, canMove ? MovableCommentItem : null];
  }, [comment, canMove]);
  const inputHandler = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newComment = event.target.value.slice(0, 80);
    setComment(newComment);
  }, [setComment]);
  const submitHandler = useCallback(() => {
    if (comment.length <= 0) return;
    setIsReady(true);
    setTimeout(() => {
      setCanMove(true);
    }, 1000);
  }, [comment, setIsReady]);
  const cancelHandler = useCallback(() => {
    setNewPosition(undefined);
    setCanMove(false);
    setIsReady(false);
  }, [setIsReady]);

  const onGrabComment = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (!canMove || isSending) return;
    setIsGrabbing(true);
    setMovement({
      x: event.movementX,
      y: event.movementY,
    });
  }, [canMove, isSending, setIsGrabbing]);
  const onReleaseComment = useCallback(() => {
    setIsGrabbing(false);
    if (movement === undefined || Math.sqrt((movement.x ** 2) + (movement.y ** 2)) < 2) return;
    setIsSending(true);
    setInterval(() => {
      setNewPosition(oldPosition => {
        if (oldPosition === undefined) return undefined;
        const newX = oldPosition.x + movement.x;
        const newY = oldPosition.y + movement.y;
        if (newX < -1000 || newX > 5000) return oldPosition;
        if (newY < -1000 || newY > 5000) return oldPosition;
        return {
          x: newX,
          y: newY,
        }
      });
    }, 1000 / 60);

    // TODO: ここにWebSocket送信部を書く
  }, [movement, setIsGrabbing]);
  const MovingComment = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (!isGrabbing) return;
    setNewPosition({
      x: event.clientX,
      y: event.clientY
    });
    setMovement({
      x: event.movementX,
      y: event.movementY,
    });
  }, [isGrabbing, setNewPosition, setMovement]);

  return (
    <>
      <div
        css={[Background, isReady ? MoveBackground : null]}
        onMouseMove={MovingComment}
        onPointerMove={MovingComment}
      >
        <div
          css={commentCss}
          onMouseDown={onGrabComment}
          onMouseUp={onReleaseComment}
          style={newPosition ? {
            left: newPosition.x,
            top: newPosition.y,
            transform: "translate(-50%, -50%)",
          } : {}}
        >
          {comment}
        </div>
        {
          isSending ? (
            <div>送信中…</div>
          ) : (
            <div css={BackButton} onClick={cancelHandler}>戻る</div>
          )
        }
        <div css={[CommentBox, isReady ? ReadyCommentBox : null]}>
            <Link href={`/lives/${liveId}`} underline="none" tabIndex={-1}>
              <div>
                戻る
              </div>
            </Link>
          <textarea value={comment} onChange={inputHandler} tabIndex={-1} />
          <input type="button" onClick={submitHandler} value="確定！" tabIndex={-1} />
        </div>
      </div>
    </>
  )
};
