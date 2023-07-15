import styled from "styled-components"
import Sidebar from "../shared/Sidebar"

const Notifications = () => {
    return (
        <>  
            <Wrapper>
                <Sidebar/>
                <Content>
                    Notifications
                </Content>
            </Wrapper>
        </>
    )
}

export default Notifications

const Wrapper = styled.div`
    display: flex;
`;

const Content = styled.div`
position: relative;
left:  200px;
`;
