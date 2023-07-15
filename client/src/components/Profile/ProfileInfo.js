import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiLoader } from "react-icons/bi"
import ProfileBodyComp from "./ProfileBodyComp";
import Error from "../shared/Error";

const ProfileInfo = ({}) => {

  const { profileId, status, setStatus} = useParams();

  const [profileUser, setProfileUser] = useState(null);

  //fetch if profileId exists
  useEffect(() => {

    if (profileId){
      fetch(`/api/${profileId}/profile`)
      .then((res) => res.json())
      .then((data) => {
        setProfileUser(data.profile);
        console.log(profileUser)
      })

      .catch((e) => {
        console.log(e);
        setStatus("error")
      });
    }
  }, [profileId]);

  return (
    <>
      { (status === "error") 
        ? <Error/>
        :

        // is the user profile fetched?
          // no : loading state
           // yes : components
      !profileUser 
      ? (
        <Loading> <BiLoader/> </Loading>
      ) 
      : (
        <BgWrap>

          <Header> <BannerImg src={profileUser.bannerSrc} /> </Header>

          <ProfileBodyComp profileUser = {profileUser}/>

          <TweetsMediaLikes>
            <Tweets>Tweets</Tweets>
            <div>Media</div>
            <div>Likes</div>
          </TweetsMediaLikes>

        </BgWrap>
      )}
    </>
  );
};

export default ProfileInfo;


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

const BgWrap = styled.div`
  width: 877px;
  border-right: 2px solid #c5c5c5;
  border-bottom: 2px solid #c5c5c5;
`;

const BannerImg = styled.img`
  width: 877px;
`;


const TweetsMediaLikes = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;
  padding: 0 50px 0 50px;
  margin: 20px 0 0 0;
  font-size: 25px;
`;

const Tweets = styled.span`
  //width: 300px;
  padding: 0 0 30px 0;
  border-bottom: 10px solid purple;
  color: purple;
  display: flex;
  justify-content: center;
`;

const Header = styled.div``;
