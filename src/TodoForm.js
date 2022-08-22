import styled from "styled-components";

function TodoForm(){
 const StyledTodoForm = styled.form`
   .todo_form{
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
   }
    
 ;`

 return (

    <StyledTodoForm className="todo_form">
    </StyledTodoForm>
 )
}

export default TodoForm;