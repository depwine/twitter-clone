import styled from "styled-components"
import Sidebar from "../shared/Sidebar"

const Bookmarks = () => {
    return (
        <>  
            <Wrapper>
                <Sidebar/>
                <Content>
                    Bookmarks
                </Content>
            </Wrapper>
        </>
    )
}

export default Bookmarks

const Wrapper = styled.div`
    display: flex;
`;

const Content = styled.div`
position: relative;
left:  200px;
`;



