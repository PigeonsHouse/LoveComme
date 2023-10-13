import { useParams } from "react-router-dom";

export const Comment = () => {
  const { liveId } = useParams();
  return (
    <>
      <div>ID: {liveId}</div>
      <div>コメントぺーじ！</div>
    </>
  )
};
