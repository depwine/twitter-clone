import ProfileInfo from "./ProfileInfo";
import TweetFeed from "../SmallTweetFeed/TweetFeed";
import Error from "../shared/Error";
import styled from "styled-components";
import Sidebar from "../shared/Sidebar";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CurrentUserContext } from "../shared/CurrentUserContext";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiLoader } from "react-icons/bi"

const Profile = () => {

  const { currentUser, status, setStatus} = useContext(CurrentUserContext);
  const [handleFeed, setHandleFeed] = useState(null);

  const { profileId } = useParams();

  useEffect(() => {
    {
      fetch(`/api/${profileId}/feed`)
        .then((res) => res.json())
        .then((data) => {
          let tempSortArr = Object.values(data.tweetsById).sort((a, b) => {
            return new Date(b.timestamp) - new Date(a.timestamp);
          });
          setHandleFeed(tempSortArr);
        })

        .catch((e) => {
          console.log(e);
          setStatus("error")
        });
    }
  }, []);

  //if profileId changes (use case -> someone else's profile and then click your own profile from sidenav), refresh feed

  useEffect(() => {
    if (profileId) {
      {
        fetch(`/api/${profileId}/feed`)
          .then((res) => res.json())
          .then((data) => {


            let dataArr = Object.values(data.tweetsById);
            let sorted = [];

            // this forEach basically puts the data.tweetsById in order based on data.tweetIds
            data.tweetIds.forEach((tweet) => {

                let found = false;
                dataArr.filter ((e) => {

                  if (!found && e.id == tweet) {
                    sorted.push(e)
                    found = true;
                    return false;
                  } else {
                    return true;
                  }
                })              
            })

            setHandleFeed(sorted);

          })

          .catch((e) => {
            console.log(e);
            setStatus("error")
          });
      }
    }
  }, [profileId]);

  //console.log(status)

  return (
    <>
      {(status === "error") 
      ? ( <Error />
      ) : (
        <Wrapper>
          <Sidebar />
          <BGWrap>

            { // if current user, ProfileInfo, else Loading

            !currentUser 
            ? <Loading> <BiLoader/> </Loading> 
            : <ProfileInfo />}

            { // if handleFeed, TweetFeed, else Loading

            !handleFeed ? (
              <Loading> <BiLoader/> </Loading>
            ) : (
              <>
                {handleFeed.map((e) => {
                  //console.log(e)
                  return (
                    <FeedWrap key={e.id}>
                      <TweetFeed
                        tweetDetails={e}                        
                        profileId={profileId}
                      />
                    </FeedWrap>
                  );
                })}
              </>
            )}
          </BGWrap>
        </Wrapper>
      )}
    </>
  );
};

export default Profile;

const BGWrap = styled.div`
  position: relative;
  left: 200px;
  //border-right: 2px solid gray;
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
const Wrapper = styled.div`
  display: flex;
`;

const FeedWrap = styled.div`
  margin: 0 0 0 20px;
`;
