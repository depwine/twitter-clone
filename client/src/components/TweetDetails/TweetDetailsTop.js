import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const TweetDetailsTop = ({tweetDetails}) => {

  //used to navigate when clicking avatar / name / etc
  const navigate = useNavigate();



    // go to author of tweet's profile
    const handleProfileRedirect = () => {
    navigate(`/${tweetDetails.author.handle}`);
    };

    return (
        <Top>
            <Avatar
            onClick={handleProfileRedirect}
            src={tweetDetails.author.avatarSrc}
            />

            <Names>
            <Name onClick={handleProfileRedirect}>
            {tweetDetails.author.displayName}
            </Name>

            <Handle>@{tweetDetails.author.handle}</Handle>
            </Names>
        </Top>
    )

}

export default TweetDetailsTop

const Names = styled.span`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

const Handle = styled.span`
  color: gray;
`;

const Avatar = styled.img`
  height: 60px;
  border-radius: 50%;
  box-shadow: 2px 2px 2px lightgray;
  outline: 3px solid white;

  &:hover {
    cursor: pointer;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0 10px 0px 0;
  column-gap: 20px;
  width: 700px;
`;
