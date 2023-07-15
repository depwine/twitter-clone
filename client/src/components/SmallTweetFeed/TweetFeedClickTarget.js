import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TweetFeedClickTarget = ({tweetDetails}) => {

    const navigate = useNavigate();

    // this is a bit of a redundancy, but it helped me isolate the tweetDetails.media[0].url
    // for tweet content media (attached photo)
    const [media, setMedia] = useState(null);

        
      // on load of tweetDetails, if tweetDetails exists:
      useEffect(() => {
        if (tweetDetails) {
      
            // grab the attached media (photo) from status
            if (tweetDetails.media) {
            let temp = Object.values(tweetDetails.media);
            let secondTemp;
      
            // // map through, extract url
            temp.forEach((e) => {
            secondTemp = e.url;
            });
      
            // assign url to state for embedding
            setMedia(secondTemp);
            }
        }
      }, [tweetDetails]);

      const handleTweetInfo = (e) => {
        e.preventDefault()
        navigate(`../tweet/${tweetDetails.id}`);
      };


    return (
        <ClickTarget onClick={handleTweetInfo}>
        <Contents>
          <Status>{tweetDetails.status}</Status>
          {!media ? null : <Img src={media} /> }
        </Contents>
      </ClickTarget>
    )

}

export default TweetFeedClickTarget

const ClickTarget = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Date = styled.span`
  padding: 10px 0 10px 20px;
  border-bottom: 1px solid lightgray;
  color: gray;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;

const Status = styled.span`
  padding: 5px 0 10px 80px;
  width: 730px;
`;

const Img = styled.img`
  border-radius: 15px;
  margin: 0 0 0 80px;
  height: auto;
  width: auto;
  max-width: 800px;
  max-height: 400px;
  object-fit: cover;
`;