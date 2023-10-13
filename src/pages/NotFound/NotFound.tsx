import { Link } from "@mui/material";
import { Header } from "../../components";
import { Background, Content } from "./styled";

export const NotFound = () => {
  return (
    <>
      <div css={Background}>
        <div css={Content}>
          <p>404</p>
          <Link href="/">
            <div>トップに戻る</div>
          </Link>
        </div>
      </div>
      <Header />
    </>
  )
};
