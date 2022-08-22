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
      h2{
        font-size: 28px;
        font-weight: 900;
      }
  `
    return(
      <StyledBackground className="background">
         <body>
        <StyledHeader>      
          <h2>TO DO LIST</h2> 
        </StyledHeader>
            <Wrap>
              <Header>
                <TodoForm>
                  <Button>

                  </Button>
                </TodoForm>
              </Header>
            </Wrap>
      </body>
      </StyledBackground>
    
    )
}

export default Body;