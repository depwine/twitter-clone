import styled from "styled-components"
import { useContext, useState } from "react"
import { CurrentUserContext } from "../shared/CurrentUserContext"
import Error from "../shared/Error"

const HomeForm = () => {

    const { currentUser, setTweetPushed, setStatus, status} = useContext(CurrentUserContext);
    const [formData, setFormData] = useState({ tweet: "" });
    const [characters, setCharacters] = useState(300);
    const [isDisabled, setIsDisabled] = useState(true);
    const [loadingText, setLoadingText] = useState("MeowPost");

    //console.log(status)

    // On form key change / enter : 
    const handleChange = (key, value) => {

        // Submit button is enabled if there are > 300 && < 1 characters remaining
        // else disabled
        if (formData.tweet.length > 300 || formData.tweet.length < 1) {
            setIsDisabled(true);
            //console.log(isDisabled)
        } else {
            setIsDisabled(false);
        }

        // set formData = anything entered in text area
        setFormData({
            ...formData,
            [key]: value,
        });

        // 
        setCharacters(300 - formData.tweet.length);
    };

    //Form  submit action:
    const handleSubmit = (e) => {

        //prev def
        e.preventDefault();

        // initialize timer, used later
        let timer;

        //make sure at least 1 letter has been entered
        if (formData.tweet.length < 2) {
            window.alert("Tweet too short, yo");

        } else {

            //fetch post to server
            fetch(`/api/tweet`, {
            method: "POST",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
                body: JSON.stringify({ status: formData.tweet }),
            })
                .then((res) => res.json())
                .then((data) => {

                    // set a timer to turn the MeowPost button to read Submitting for a few seconds
                    // to indicate that the page is doing something

                    timer = setTimeout(() => {
                    setLoadingText("Submitting ... ");
                    }, 100);

                    //revert the button to Meowpost to suggest loading is done
                    timer = setTimeout(() => {
                    setLoadingText("MeowPost");
                    }, 1600);

                    //set tweet
                    setTweetPushed(data);

                    //clear form data
                    setFormData({
                    tweet: "",
                    });

                    //reset characters to 300
                    setCharacters(300);

                    //clear text area after submit
                    e.target.reset();
                    })

                    .catch((error) => {
                      setStatus("error")
                    });

                    //clear timer after submit function has completed
                    clearTimeout(timer);
                    }
    };

    return (
              (status === "error" )
              ? <Error/> 
              : (    
              <Form onSubmit={handleSubmit}>

                      <Img src={currentUser.avatarSrc} />

                      <Label htmlFor="tweet"></Label>
                      <Input
                        placeholder="Hit them keys and make some political damage..."
                        type="text"
                        id="tweet"
                        onChange={(e) => handleChange(e.target.id, e.target.value)}
                      />


                      <HoverElements> 
                        <Characters remaining={formData.tweet.length}> {characters} characters left </Characters>
                        <Button type="submit" disabled={isDisabled}> {loadingText} </Button>
                      </HoverElements>

              </Form>
              )
    )

}

export default HomeForm
const Label = styled.label``;

const Characters = styled.span`
  color: ${(props) =>
    props.remaining <= "250"
      ? "gray"
      : props.remaining >= "250" && props.remaining <= 300
      ? "orange"
      : "red"};
`;

const HoverElements = styled.span`
  position: absolute;
  bottom: 10px;
  right: -40px;
`;

const Input = styled.textarea`
  display: flex;
  resize: none;
  height: 185px;
  width: 735px;
  border: 2px solid lightgray;
  border-radius: 5px;
  padding: 10px 0 0 80px;
  font-size: 20px;
`;

const Button = styled.button`
  border: 1px solid purple;
  background-color: purple;
  height: 40px;
  width: 100px;
  border-radius: 15px;
  margin: 0 0 0 10px;

  color: white;

  &:disabled {
    background-color: gray;
    border: none;
  }

  &:hover {
    cursor: pointer;
  }

  &:active {
    background-color: #c000c0;
  }
`;

const Img = styled.img`
  position: absolute;
  height: 50px;
  border-radius: 50%;
  margin: 10px;
`;

const Form = styled.form`
  position: relative;
  margin: 20px;
  height: 200px;
  width: 770px;
  border-radius: 10px;
`;
