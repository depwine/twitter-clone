import styled from "styled-components";
import { FaRegComment, FaRetweet, FaHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FiShare } from "react-icons/fi";
import { useEffect, useState } from "react";

const TweetDetailsIcons = ({tweetDetails}) => {

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
            <span><FaRegComment /></span>
            <span><FaRetweet /></span>

            <LikeButton onClick={handleLikes}>
                {
                    // if isLiked true , show red heart  - if false, black heart
                }
                {!isLiked 
                 ? (<span><FaHeart /> {likes}</span>) 
                 : (<span><FcLike /> {likes} </span>)}
            </LikeButton>

            <span><FiShare /></span>
        </Icons>
    )

}

export default TweetDetailsIcons

const LikeButton = styled.button`
  border: none;
  background-color: white;
`;

const Icons = styled.div`
  display: flex;

  color: gray;
  justify-content: space-between;
  padding: 10px 0 0 0;
  margin: 0 0 0 20px;
`;
