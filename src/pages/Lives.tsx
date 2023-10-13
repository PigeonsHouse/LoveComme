import { Link } from "@mui/material";
import { useParams } from "react-router-dom";

export const Lives = () => {
  const { liveId } = useParams();
  return (
    <div>
      <Link href="/">
        <div>ライブ一覧に戻る</div>
      </Link>
      {liveId}
      <Link href={`/lives/${liveId}/comment`}>
        <div>コメントをする</div>
      </Link>
    </div>
  )
};
