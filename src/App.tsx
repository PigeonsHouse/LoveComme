import { Navigate, Route, Routes } from "react-router-dom";
import { Root, Lives, Comment, NotFound } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Root /> } />
        <Route path="/lives" element={ <Navigate replace to="/" /> } />
        <Route path="/lives/:liveId" element={ <Lives /> } />
        <Route path="/lives/:liveId/comment" element={ <Comment /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  );
}

export default App;
