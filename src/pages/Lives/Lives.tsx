import { Link } from "@mui/material";
import { useParams } from "react-router-dom";
import { Header } from "../../components";
import { Background, CommentButton, CommentStyle, LiveBox, LiveImage } from "./styled";
import { useEffect, useState } from "react";

export type WSMessage = {
  move_x: number;
  move_y: number;
  comment: string;
}

export const Lives = () => {
  const { liveId } = useParams();
  const [commentList, setCommentList] = useState<WSMessage[]>([]);

  useEffect(() => {
    const f = async () => {
      const client = new WebSocket("wss://love-comme-server.pigeons.house/ws");
      client.addEventListener("message", (event: MessageEvent<string>) => {
        setCommentList(oldList => [...oldList, JSON.parse(event.data) as WSMessage])
      });
    };
    f();
  }, []);

  return (
    <>
      <div css={Background}>
        <h2>らぶこめらいぶ！</h2>
        <div css={LiveBox}>
          <div css={LiveImage}>
            <img src="https://s3.ap-northeast-1.wasabisys.com/mastodondb/accounts/avatars/000/000/004/original/95fb339cfb89d75e.jpeg" />
            {
              commentList.map((comment: WSMessage, index) => {
                const style = CommentStyle(comment.move_x, comment.move_y, index);
                return (
                  <div key={index} css={style}>
                    {comment.comment}
                  </div>
                )
              })
            }
          </div>
        </div>
        <Link sx={{color: "black"}} underline="none" href={`/lives/${liveId}/comment`}>
          <span css={CommentButton}>コメントをする</span>
        </Link>
      </div>
      <Header />
    </>
  )
};
