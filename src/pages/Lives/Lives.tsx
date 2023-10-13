import { Link } from "@mui/material";
import { useParams } from "react-router-dom";
import { Header } from "../../components";
import { Background } from "./styled";

export const Lives = () => {
  const { liveId } = useParams();
  return (
    <>
      <div css={Background}>
        <Link sx={{color: "black"}} underline="none" href={`/lives/${liveId}/comment`}>
          <div>コメントをする</div>
        </Link>
      </div>
      <Header />
    </>
  )
};
