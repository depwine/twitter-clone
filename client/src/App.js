import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Profile from "./components/Profile/Profile";
import TweetDetails from "./components/TweetDetails/TweetDetails";
import Notifications from "./components/Notifications/Notifications";
import Home from "./components/HomeFeed/Home";
import GlobalStyle from "./components/shared/GlobalStyle";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/:profileId" element={<Profile />} />
        <Route path="/tweet/:tweetId" element={<TweetDetails />} />
        {
          //<Route path="/error" element={<Error />} />
        }
      </Routes>
    </BrowserRouter>
  );
};

export default App;
