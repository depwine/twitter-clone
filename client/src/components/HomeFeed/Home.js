import Sidebar from "../shared/Sidebar";
import styled from "styled-components";
import Error from "../shared/Error";
import HomeHeader from "./HomeHeader";
import HomeFeed from "./HomeFeed";
import { useContext } from "react";
import { CurrentUserContext } from "../shared/CurrentUserContext";


const Home = () => {
  
  const { status } = useContext(CurrentUserContext);

  return (
    <>
      { // always check if initial fetch (for currentUser) failed
        // if currentUser fetch didnt fail (errorcatch = false ), loading screen
        // if failed, go to error page

      ! (status==="error")
      ? (
        <Wrapper>
          <Sidebar />
          <Content>
            <HomeHeader />
            <HomeFeed/>
          </Content>
        </Wrapper>
      ) 
      : (
        <Error />
      )
      }
    </>
  );
};

export default Home;

const Wrapper = styled.div`

  display: flex;
  height: 100vh;
`;

const Content = styled.div`
  position: relative;
  left:  200px;
  display: flex;
  flex-direction: column;
  
`;


