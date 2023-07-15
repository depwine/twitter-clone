import styled from "styled-components";
import { useEffect, useState} from "react";
import {FaCalendar} from "react-icons/fa"
import {ImLocation} from "react-icons/im"

const ProfileBodyComp = ({profileUser}) => {

    const [followedContent, setFollowedContent] = useState("Not Following");
    const [isFollowingYouContent, setIsFollowingYouContent] = useState ("Doesn't Follow You")

    //used for time formatting
    const moment = require("moment");


    //if profileUser has loaded, set follow text content
    useEffect(() => {
        if (profileUser) {
          if (profileUser.isBeingFollowedByYou) {
            setFollowedContent("Following");
          }
          if (profileUser.isFollowingYou){
            setIsFollowingYouContent("Follows You")
          }
        }
      }, [profileUser]);

    return (
        
    <ProfileBody>
        <ProfileImg src={profileUser.avatarSrc} />

        <ProfileLeft>
            <Name>{profileUser.displayName}</Name>

            <HandleFollow>
                <Handle>@{profileUser.handle}</Handle>
                <Following isFollowing = {profileUser.isFollowingYou}>{isFollowingYouContent}</Following>
            </HandleFollow>
            
            <Bio>{profileUser.bio}</Bio>

            <LocationDate>
                {profileUser.location && <div> <ImLocation/> {profileUser.location}</div>}
                <Date> <FaCalendar/> Joined {moment(profileUser.joined).format(`MMMM YYYY`)}</Date>
            </LocationDate>

            <Fol>
                <Num>{profileUser.numFollowing} </Num> Following
                <Num>{profileUser.numFollowers} </Num> Followers
            </Fol>

        </ProfileLeft>

        <ProfileRight>              
            <Followed isBeingFollowedByYou={profileUser.isBeingFollowedByYou}>{followedContent}</Followed>
        </ProfileRight>

    </ProfileBody>
    )


} 
export default ProfileBodyComp


const Num = styled.span`
  font-weight: bold;
  padding: 0 5px 0 5px;
`;

const Fol = styled.span`
  padding: 15px 0 0 0;
  display: flex;

`;

const LocationDate = styled.span`
  display: flex;
  color: gray;
`;

const Date = styled.span`
   padding : 0 0 0 8px;
`;

const HandleFollow = styled.span`
  display: flex;
  padding: 5px 0 0 0;
  row-gap: 5px;
`;

const Following = styled.span`

display: flex;
align-items: center;
justify-content: center;
background-color: #ebebeb;
width: ${(props) => props.isFollowing? "100px" : "140px"};
height: 20px;
border-radius: 10px;
`;

const Handle = styled.span`
  padding: 0 10px 0 0;
`;

const Name = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const Bio = styled.span`
  padding: 10px 0 10px 0px;
  width: 600px;
`;

const ProfileImg = styled.img`
  height: 150px;
  border-radius: 50%;
  border: 6px solid white;
  position: absolute;

  top: -150px;
  left: 10px;
`;

const ProfileRight = styled.div``;

const ProfileLeft = styled.div`
  display: flex;
  margin: 10px 0 0 0;
  flex-direction: column;
  padding: 0 0 0 20px;

`;

const ProfileBody = styled.div`
  width: 837px;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  margin: 70px 0 0 0;
`;

const Followed = styled.div`
  position: relative;
  top: -50px;
  right: -25px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) =>
    props.isBeingFollowedByYou ? "purple" : "gray"};
  color: white;
  width: 150px;
  height: 40px;

  border-radius: 5px;
`;
