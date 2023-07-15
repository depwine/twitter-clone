import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {  FaRetweet } from "react-icons/fa";
import {BiLoader} from "react-icons/bi"

import TweetFeedIcons from "./TweetFeedIcons";
import TweetFeedClickTarget from "./TweetFeedClickTarget";
import TweetFeedTop from "./TweetFeedTop";

const TweetFeed = ({ tweetDetails }) => {

  const navigate = useNavigate();

  const handleRetweet = () => {
    navigate(`../${tweetDetails.retweetFrom.handle}`);
  }

  return (
    <>
      {!tweetDetails ? (
        <Loading> <BiLoader/> </Loading>
      ) : (
        <Wrapper>          
          <Tweet>

              { // if retweet exists, render details
              tweetDetails.retweetFrom && <Retweet onClick = {handleRetweet}><FaRetweet /> @{tweetDetails.retweetFrom.handle} Remeowned </Retweet>
              }

              <TweetFeedTop tweetDetails={tweetDetails} />

              <TweetFeedClickTarget tweetDetails = {tweetDetails} />



              <TweetFeedIcons tweetDetails = {tweetDetails}/>

          </Tweet>
        </Wrapper>
      )}
    </>
  );
};

export default TweetFeed;

const Retweet = styled.div`
  gap: 5px;
  position: relative;
  display: flex;
  left: 0px;
  background: #fafafa;
  color: #858585;
  height: 30px;
  margin: 0 0 5px 0;
  padding: 0 5px 0 5px;
  width: 200px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  //box-shadow: 5px 5px 5px lightgray;
  &:hover{
    cursor: pointer;
    background: #ebebeb;
  }
  &:active{
    background: #ffffff;
  }
`;

const Tweet = styled.div`
  border: 2px solid #fcfcfc;
  // max-width: 750px;
  z-index: 1;
  position: relative;
  display: flex;
  background-color: white;
  flex-direction: column;
  margin: 10px 0 0 20px;
  border-radius: 5px;
  row-gap: 2px;
  box-shadow: 2px 5px 8px 2px lightgray;
  padding: 10px;
  width: 795px;
  &:hover {
    outline: 2px solid lightgray;
    background-color: #fdfdfd;
    box-shadow: 0px 0px 7px 5px lightgray;
  }
`;

const Wrapper = styled.div`
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  height: auto;
  border-right: 2px solid #c5c5c5;
  width: 837px;
  padding: 0 20px 0 0;
`;

const Loading = styled.div`
margin: 100px 0 0 0;
display: flex;
justify-content: center;
align-items: center;
width: 800px;
font-size: 50px;
font-weight: bold;
animation: rotation 2s infinite linear;
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
`;

