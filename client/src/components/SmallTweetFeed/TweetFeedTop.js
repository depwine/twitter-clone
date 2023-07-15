import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const TweetFeedTop = ({ tweetDetails }) => {
  //used to navigate when clicking avatar / name / etc
  const navigate = useNavigate();

  // go to author of tweet's profile
  const handleProfileRedirect = () => {
    navigate(`/${tweetDetails.author.handle}`);
  };

    //used for time formatting
    const moment = require("moment");

  return (
    <Top>
    <LeftDiv>
      <Avatar
        onClick={handleProfileRedirect}
        src={tweetDetails.author.avatarSrc}
      />
    </LeftDiv>

    <Name onClick={handleProfileRedirect}>
      {tweetDetails.author.displayName}
    </Name>

    <Handle>@{tweetDetails.author.handle}</Handle>
    <Date>{moment(tweetDetails.timestamp).format(`MMMM DD`)}</Date>
  </Top>
  );
};

export default TweetFeedTop;

const Top = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0 10px 0px 0;
  column-gap: 20px;
  width: 700px;
`;

const LeftDiv = styled.div``;

const Avatar = styled.img`
  height: 60px;
  border-radius: 50%;
  box-shadow: 0px 5px 5px lightgray;
  outline: 2px solid #acacac;
  z-index: 55;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 5px 5px gray;
  }
`;

const Name = styled.span`
  font-weight: bold;
  z-index: 55;
  &:hover {
    cursor: pointer;
    font-weight: bolder;
    text-decoration: underline;
  }
`;

const Handle = styled.span`
  color: gray;
`;

const Date = styled.span`
  color: gray;
  width: 100px;
`;
