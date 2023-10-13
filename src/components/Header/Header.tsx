import { Link } from "@mui/material";
import { Container, TopLink } from "./styled";

export const Header = () => {
  return (
    <div css={Container}>
      <div css={TopLink}>
      <Link href="/" underline="none">
        <div>
          LoveComme!
        </div>
      </Link>
      </div>
    </div>
  )
};
