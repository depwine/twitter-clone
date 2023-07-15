import styled from "styled-components"
import TweetFeed from "../SmallTweetFeed/TweetFeed"
import {BiLoader} from "react-icons/bi"
import { CurrentUserContext } from "../shared/CurrentUserContext"
import { useContext, useEffect, useState } from "react"
import Error from "../shared/Error"


const HomeFeed = () => {

    const [feed, setFeed] = useState(null)
    const {tweetPushed, setStatus, status} = useContext(CurrentUserContext)

    useEffect(() => {

        fetch (`/api/me/home-feed`)
            .then((res) => res.json())
            .then((data) => {

                let dataArr = Object.values(data.tweetsById);
                let sorted = [];
    
                // oh hey this sorting array by other array thing totally didnt take me eight months to find
                  // https://www.youtube.com/watch?v=dv9Poaz0oQQ < ---- saving for ref down the line
    

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
    
                                                        // sort check :

                                                        // console.log("unsorted")
                                                        // console.log(data.tweetsById)

                                                        // console.log("sort list")
                                                        // console.log(data.tweetIds)

                                                        // console.log("sorted")
                                                        // console.log(sorted)

                setFeed(sorted);
            })
            .catch((e) => {
                console.log(e)
                setStatus("error")
            })

    }, [])

    //fetch each time a post is pushed
    useEffect (() => {

        if (tweetPushed){
            console.log(tweetPushed)


            fetch (`/api/me/home-feed`)
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
                
                setFeed(sorted);
    
            })
            .catch((e) => {
                console.log(e)
            })
        }

    }, [tweetPushed])

    return (
        <>
            {   //check if there's been an error anywhere
               status === "error"
               ? <Error/>
               :
                   // has feed been fetched yet? 
                      //no : loading state
                         // yes: render feed w/ appropriate details

                ! feed
                ? <LoadingFeedDiv> <BiLoader/> </LoadingFeedDiv>
                : (
                    <Wrapper>
                        {
                            feed.map((e) => {
                                return (
                                    <TweetFeed tweetDetails={e} key = {e.id}/>
                                )
                            })
                        }                        
                    </Wrapper>
                )
            }
        </>
    )
}

export default HomeFeed

const Wrapper = styled.div`
    
    `;

const LoadingFeedDiv = styled.div`
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

