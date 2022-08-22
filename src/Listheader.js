
import styled from "styled-components";

function ListHeader(){
    const StyledDiv = styled.div`
    .list_header {
        top: 10%;
        left: 50%;
        opacity: 60%;
        position: fixed;
        transform: translate(-50%, -50%);
        background-color: #fff;
        width: 600px;
        height: 100px;
        padding: 24px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        box-shadow: 6px 6px 16px #555555;
        border-radius: 30px;
        line-height: 50px;
        font-family: 'Times New Roman', Times, serif
      }
    `

    return(
        <StyledDiv className="list_header"></StyledDiv>

    )

}

