

import styled from "styled-components";

function Wrap(){
    const StyledWrap = styled.div`
    .wrap{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        opacity: 80%;
        position: fixed;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        width: 600px;
        height: 500px;
        padding: 24px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        box-shadow: 6px 6px 16px #555555;
        border-radius: 30px;
    }
    `;
    return (
       <StyledWrap className="wrap"></StyledWrap>
        )
    
        }
  export default Wrap;