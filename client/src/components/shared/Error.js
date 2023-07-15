import styled from "styled-components"
import Sidebar from "../shared/Sidebar"

const Error = () => {

    return (
        <>  
            <Wrapper>
                <Sidebar/>
                <ErrorDiv>
                    <FloatingInnerError>
                    <img></img>
                    <Bold>An unknown error has occured.</Bold>
                    <Italic>Please refresh the page to clear the issue, or contact support if the problem persists</Italic>
                    
                    {
                            // <Button>Click to Manually Clear Error</Button>
                    }
                    </FloatingInnerError>
                </ErrorDiv>
            </Wrapper>
        </>
    )
}

export default Error

const Button = styled.button`
    border: 1px solid gray;
    border-radius: 15px;
    margin: 100px 0 0 0;
    height: 40px;
    width: 200px;
    font-weight: bold;

    &:hover{
        cursor: pointer;
        background-color: lightgray;
    }

`;


const Bold = styled.span`
    font-weight: bold;
    font-size: 20px;
    padding: 0 0px 20px 0;
`;

const Italic = styled.span`
    font-style: italic;
    font-size: 18px;

    text-align: center;

`;


const FloatingInnerError = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 5px solid #f8f8f8;
    height: 500px;
    width: 600px;
    border-radius: 5px;
    box-shadow: 5px 5px 5px lightgray;
`;


const Wrapper = styled.div`
    display: flex;

`;

const ErrorDiv = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100vh;
    width: 80%;
`;
