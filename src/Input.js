import styled from "styled-components";

function Input (){
  const StyleInput = styled.input`
     input{
        outline: 0;
        border: none;
     }
    .todo_input{
        background-color: rgb(199, 170, 221);
        width: 100%;
        font-size: 16px;
        padding: 12px 14px;
        background-color: #f6f6f6;
        border-radius: 8px;
    }
  `;
  return (
     <StyleInput type="text" className="todo_input" placeholder="할 일을 입력해 주세요." autoFocus="true">
     </StyleInput>
  )
}
export default Input;