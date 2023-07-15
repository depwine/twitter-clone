import styled from "styled-components";
import HomeForm from "./HomeForm";
import { useContext } from "react";
import { CurrentUserContext } from "../shared/CurrentUserContext";
import { BiLoader } from "react-icons/bi";
import Error from "../shared/Error";


const HomeHeader = () => {
  const { currentUser, status} = useContext(CurrentUserContext);

  //console.log(status)

  return (
    <>
      { (status === "error")
        ? <Error/>
        :
        // has currentUser fetched?
          // no:  LoadingForm state (placeholder w/ appropriate padding)
           // yes : tweet form
        !currentUser 
        ? (
        <>
          <Home>Home</Home>
          <LoadingForm> <BiLoader /> </LoadingForm>
        </>
        ) 
        : (
        <Wrapper>
          {
          // header : 
          }
          <Home>Home</Home>

          {
            // Tweet Form: 
          }
          <HomeForm />

        </Wrapper>
      )}
    </>
  );
};

export default HomeHeader;

const LoadingForm = styled.div`
  margin: 100px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: bold;
  animation: rotation 2s infinite linear;
  width: 800px;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

const Home = styled.div`
  border: none;
  background-color: white;
  display: flex;
  align-items: center;
  font-weight: bold;
  width: 837px;
  border-bottom: 2px solid #c5c5c5;
  padding: 20px 0 20px 20px;
  color: gray;
  gap: 5px;
  font-size: 20px;
`;

const Wrapper = styled.div`
  border-right: 2px solid #c5c5c5;
  border-bottom: 2px solid #c5c5c5;
`;
