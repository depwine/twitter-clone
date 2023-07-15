import styled from "styled-components";
import { FaRegComment, FaRetweet, FaHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FiShare } from "react-icons/fi";
import { useEffect, useState } from "react";

const TweetFeedIcons = ({tweetDetails}) => {

      //these two const are used for the like/unlike feature 
  const [likes, setLikes] = useState(null);
  const [isLiked, setIsLiked] = useState(null);

    // on load of tweetDetails, if tweetDetails exists:
    useEffect(() => {
        if (tweetDetails) {
        //set initial isLiked (for the add/remove likes)
        setIsLiked(tweetDetails.isLiked);

        //set initial # of likes (for the add/remove likes)
        setLikes(tweetDetails.numLikes);
    }
    }, [tweetDetails]);

      //when user clicks like/unlike, this is what happens:
  const handleLikes = () => {
    if (isLiked) {
      setLikes((likes) => likes - 1);
      setIsLiked(false);
    } else {
      setLikes((likes) => likes + 1);
      setIsLiked(true);
    }
  };

    return (
        <Icons>

        <Comment> <FaRegComment /> </Comment>

        <RetweetIconRow> <FaRetweet /> {
            tweetDetails.numRetweets > 0 && tweetDetails.numRetweets
        } </RetweetIconRow>

        <LikeButton onClick={handleLikes}>
          {!isLiked 
          ? (<span> <FaHeart /> 0</span>
          ) 
          : (<span> <FcLike /> {likes} </span>
          )}
        </LikeButton>

        <Share> <FiShare /> </Share>
      </Icons>
    )

}

export default TweetFeedIcons

const Icons = styled.div`
  display: flex;
  align-items: center;
  width: 410px;
  color: gray;
  justify-content: space-between;
  padding: 10px 0 0 82px;
  margin: 0 0 0 20px;
`;

const Comment = styled.span`
  &:hover {
    cursor: pointer;
  }
`;

const LikeButton = styled.button`
  border: none;
  background-color: white;
  &:hover {
    background-color: #fdfdfd;
    cursor: pointer;
  }
`;

const RetweetIconRow = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const Share = styled.span`
  &:hover {
    cursor: pointer;
  }
`;
