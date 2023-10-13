import { Avatar, Card, CardHeader, CardMedia, Link } from "@mui/material";
import { Header } from "../../components";
import { Background, CardContainer } from "./styled";

export const Root = () => {
  const liveInfos = [
    {
      liveId: 1,
      thumbnail: "https://s3.ap-northeast-1.wasabisys.com/mastodondb/accounts/avatars/000/000/004/original/95fb339cfb89d75e.jpeg",
      title: "らぶこめらいぶ！",
      avatarUrl: "https://s3.ap-northeast-1.wasabisys.com/mastodondb/media_attachments/files/110/678/917/491/014/603/original/4bb900a9be5f25a4.jpeg",
    },
    {
      liveId: 1,
      thumbnail: "https://s3.ap-northeast-1.wasabisys.com/mastodondb/accounts/avatars/000/000/004/original/95fb339cfb89d75e.jpeg",
      title: "らぶこめらいぶ！",
      avatarUrl: "https://s3.ap-northeast-1.wasabisys.com/mastodondb/media_attachments/files/110/678/917/491/014/603/original/4bb900a9be5f25a4.jpeg",
    },
    {
      liveId: 1,
      thumbnail: "https://s3.ap-northeast-1.wasabisys.com/mastodondb/accounts/avatars/000/000/004/original/95fb339cfb89d75e.jpeg",
      title: "らぶこめらいぶ！",
      avatarUrl: "https://s3.ap-northeast-1.wasabisys.com/mastodondb/media_attachments/files/110/678/917/491/014/603/original/4bb900a9be5f25a4.jpeg",
    },
    {
      liveId: 1,
      thumbnail: "https://s3.ap-northeast-1.wasabisys.com/mastodondb/accounts/avatars/000/000/004/original/95fb339cfb89d75e.jpeg",
      title: "らぶこめらいぶ！",
      avatarUrl: "https://s3.ap-northeast-1.wasabisys.com/mastodondb/media_attachments/files/110/678/917/491/014/603/original/4bb900a9be5f25a4.jpeg",
    },
    {
      liveId: 1,
      thumbnail: "https://s3.ap-northeast-1.wasabisys.com/mastodondb/accounts/avatars/000/000/004/original/95fb339cfb89d75e.jpeg",
      title: "らぶこめらいぶ！",
      avatarUrl: "https://s3.ap-northeast-1.wasabisys.com/mastodondb/media_attachments/files/110/678/917/491/014/603/original/4bb900a9be5f25a4.jpeg",
    },
    {
      liveId: 1,
      thumbnail: "https://s3.ap-northeast-1.wasabisys.com/mastodondb/accounts/avatars/000/000/004/original/95fb339cfb89d75e.jpeg",
      title: "らぶこめらいぶ！",
      avatarUrl: "https://s3.ap-northeast-1.wasabisys.com/mastodondb/media_attachments/files/110/678/917/491/014/603/original/4bb900a9be5f25a4.jpeg",
    },
  ];

  return (
    <>
      <div css={Background}>
        <div css={CardContainer}>
        {
          liveInfos.map((liveInfo) => {
            return (
              <Link href={`/lives/${liveInfo.liveId}`} underline="none">
                <Card sx={{ maxWidth: 475, margin: 2 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={liveInfo.thumbnail}
                    alt=""
                  />
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" src={liveInfo.avatarUrl}>
                      </Avatar>
                    }
                    sx={{ fontSize: 0.1 }}
                    title={liveInfo.title}
                  />
                </Card>
              </Link>
            )
          })
        }
        </div>
      </div>
      <Header />
    </>
  )
};
