import { useParams } from "react-router-dom";

export const Comment = () => {
  const { liveId } = useParams();
  return (
    <div>
      コメントぺーじ！
    </div>
  )
};
