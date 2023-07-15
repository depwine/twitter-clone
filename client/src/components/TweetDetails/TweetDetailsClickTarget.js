import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TweetDetailsClickTarget = ({tweetDetails}) => {

    // this is a bit of a redundancy, but it helped me isolate the tweetDetails.media[0].url
    // for tweet content media (attached photo)
    const [media, setMedia] = useState(null);

    const navigate = useNavigate()
        
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
                {media && <Img src={media} />}
              </Contents>
            </ClickTarget>
    )

}

export default TweetDetailsClickTarget

const ClickTarget = styled.div`
  &:hover {
    cursor: pointer;
  }
`;


const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;

const Status = styled.span`
  padding: 20px 0 20px 0;
  font-size: 30px;
  width: 930px;
`;

const Img = styled.img`
  border-radius: 15px;
  max-width: 950px;
  max-height: 950px;
  height: auto;
  width: auto;
`;