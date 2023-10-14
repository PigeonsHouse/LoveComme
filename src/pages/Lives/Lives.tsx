import { Link } from "@mui/material";
import { useParams } from "react-router-dom";
import { Header } from "../../components";
import { Background, CommentButton } from "./styled";
import { useEffect } from "react";
import axios from "axios";

export const Lives = () => {
  const { liveId } = useParams();

  useEffect(() => {
    const f = async () => {
      const res = await axios.get("https://love-comme-server.pigeons.house/");    
      console.log(res.data);
    };
    f();
  }, []);

  return (
    <>
      <div css={Background}>
        <Link sx={{color: "black"}} underline="none" href={`/lives/${liveId}/comment`}>
          <span css={CommentButton}>コメントをする</span>
        </Link>
      </div>
      <Header />
    </>
  )
};
