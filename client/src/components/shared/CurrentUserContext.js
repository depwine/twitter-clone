import { useState, useEffect } from "react"
import { createContext } from "react"

// import { useNavigate } from "react-router-dom";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ( { children } ) => {

    const [currentUser, setCurrentUser] = useState(null)
    const [status, setStatus] = useState("loading")

    //tweetpushed is used to refresh home page State after user publishes a new tweet
    const [tweetPushed, setTweetPushed] = useState(null)

    // do initial user fetch (as though logged in state)
    useEffect (() => {

        fetch (`/api/me/profile`)
            .then ((res) => res.json())
            .then ((data) => {

                setCurrentUser(data.profile)
                
                setStatus("idle")              

            })
            .catch ((e) =>  {
                setStatus("error")
                console.log(e);                
            })

    }, [])

    return (
        <>
            <CurrentUserContext.Provider value = {{currentUser, status, setStatus, tweetPushed, setTweetPushed}} >
                {children}
            </CurrentUserContext.Provider>
        </>
    )

}

