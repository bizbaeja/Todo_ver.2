/*eslint-disable*/
import styled from "styled-components";
import React from 'react'
import Button from './Button';
import TodoForm from './TodoForm';
import Wrap from './Wrap'; 




function Body() {
  const StyledBackground = styled.background`
          background-image: url(./화병.jpeg);
          background-repeat: no-repeat;
  `

  const StyledHeader = styled.body`
      body {

          background-color: #ececec9e;
          color: #555555;
          width: 1000px;

      }

    
  `
    return(
      <Body className="background">
        <ListHeader>
        <h2>TO DO LIST</h2>
        </ListHeader>

      <Wrap>
        <Header>
          <TodoForm>
            <Button>

            </Button>
          </TodoForm>
        </Header>
      </Wrap>
      </Body>
    
    )
}

export default Body;