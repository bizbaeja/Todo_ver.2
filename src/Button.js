import styled from "styled-components";
import React from 'react'
import Input from './Input';

function Button(){
  const StyleButton = styled.button`
  .todo_submit_button{
        cursor: pointer;
        button>i {
            pointer-events: none;
        }
    }
 
  `;

    return(
        <Input>
            <StyleButton type="submit" className="todo_submit_button" >
            </StyleButton>
        </Input>
    )
}

export default Button;