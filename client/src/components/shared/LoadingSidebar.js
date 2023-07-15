import { FaHome, FaUserAlt, FaBell, FaBookmark } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./logo";

const LoadingSidebar = () => {
    
  // this component has dummy images to make the page look substantial while currentUser initially loads
  // else, the sideBar doesnt render for a few seconds and it just look weird.

  return (
    <Wrapper>

      <LogoButton>  <Logo /> </LogoButton>

      <TempDiv> <FaHome /> Home </TempDiv>
      <TempDiv> <FaUserAlt /> Profile  </TempDiv>
      <TempDiv> <FaBell /> Notifications{" "} </TempDiv>
      <TempDiv> <FaBookmark /> Bookmarks{" "}  </TempDiv>

      <MeowLink to={"https://www.youtube.com/watch?v=ndsaoMFz9J4"}>  Meow </MeowLink>
    </Wrapper>
  );
};

export default LoadingSidebar;

const LogoButton = styled.button`
  border: none;
  background-color: #fdfdfd;

  &:hover {
    cursor: pointer;
  }
`;

const MeowLink = styled(Link)`
  text-decoration: none;
  background-color: #00005e;
  width: 140px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 5px 0 5px 20px;

  &:hover {
    background-color: #000079;
    cursor: pointer;
  }

  &:active {
    background-color: #000094;
  }
`;

const TempDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-size: 20px;
  color: #02027e;
  //margin: 0 0 0 20px;
  padding: 5px 0 5px 20px;
  width: 180px;

  &:hover {
    cursor: pointer;
    background-color: #0006611f;

    width: 180px;
    border-radius: 15px;
  }

  &.active {
    color: #ad0090;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  min-height: 99vh;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 200px;
  background-color: #fcfcfc;

  padding: 20px 0 0 0;
  z-index: 4;
  outline: 2px solid #c5c5c5;
`;
