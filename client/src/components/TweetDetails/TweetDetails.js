import Sidebar from "../shared/Sidebar";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { BiLoader } from "react-icons/bi";

import TweetDetailsTop from "./TweetDetailsTop";
import TweetDetailsClickTarget from "./TweetDetailsClickTarget";
import TweetDetailsIcons from "./TweetDetailsIcons";
import Error from "../shared/Error";

const TweetDetails = () => {

  const [tweetDetails, setTweetDetails] = useState(null);

  const { tweetId, status, setStatus} = useParams();

  //used for time formatting
  const moment = require("moment");

  //used to navigate when clicking avatar / name / etc
  const navigate = useNavigate();

  //get the tweet info by id
  useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTweetDetails(data.tweet);
      })

      .catch((e) => {
        console.log(e)
        setStatus("error")
      })
  }, []);

    // back button in top div functionality
  const handleHome = () => {
    navigate("/");
  };

  return (
    <>
      <BGWRap>
        <Sidebar />

        <Wrapper>

          {
            (status === "error")
            ? <Error/>
            :           
          
          !tweetDetails ? (

            <> {
                // Loading HEADER : 
                // on loading state, show the Home back button and a loading animation 
               }
              <Home onClick={handleHome}> <FaArrowLeft /> Home </Home>
              <Loading> <BiLoader /> </Loading>
            </>

          ) : (
            <>
            {
               // HEADER : 
            }
              <Home onClick={handleHome}>
                <FaArrowLeft />
                Back
              </Home>

            {
               // Big Tweet Body : 
            }
              <Tweet>
                <TweetDetailsTop tweetDetails = {tweetDetails}/>

                {
                  // has this been re-tweeted?
                }

                {tweetDetails.retweetFrom ? (
                  <Retweet>
                    @{tweetDetails.retweetFrom.handle} Retweeted{" "}
                  </Retweet>
                ) : null}

                {
                  // render status, images, etc :
                }

                <TweetDetailsClickTarget tweetDetails = {tweetDetails}/>

                <Date>
                      {moment(tweetDetails.timestamp).format(
                        `MM:HH A - MMM DD YYYY`
                      )}{" "}
                      - Critter Web App
                </Date>

                {
                    // bottom row of icons: 
                }
                <TweetDetailsIcons />

              </Tweet>
            </>
          )}
        </Wrapper>
      </BGWRap>
    </>
  );
};

export default TweetDetails;


const Date = styled.span`
  padding: 10px 0 10px 20px;
  border-bottom: 1px solid lightgray;
  color: gray;
`;


const Home = styled.div`
  border: none;
  background-color: white;
  display: flex;
  align-items: center;
  font-weight: bold;
  height: 100%;
  border-bottom: 2px solid #c5c5c5;
  padding: 20px 0 20px 20px;
  color: gray;
  gap: 5px;
  font-size: 20px;

  &:hover {
    cursor: pointer;
    background-color: #fafafa;
  }
`;

const BGWRap = styled.div`
  display: flex;
  flex-direction: row;
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

const Retweet = styled.span`
  position: absolute;
  display: flex;
  right: 20px;
  background: #e0e0e0;
  color: #858585;
  height: 40px;
  width: 200px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 5px lightgray;
`;

const Wrapper = styled.div`
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  height: auto;
  border-right: 2px solid #c5c5c5;
  width: 1000px;
  padding: 0 0px 20px 0;
  border-bottom: 2px solid #c5c5c5;
  position: relative;
  left: 200px;
`;

const Tweet = styled.div`
  border: 2px solid #fcfcfc;
  width: 935px;
  position: relative;
  display: flex;
  background-color: white;
  flex-direction: column;
  margin: 10px 0 0 20px;
  border-radius: 5px;
  row-gap: 2px;
  box-shadow: 5px 5px 5px lightgray;
  padding: 10px;
`;
