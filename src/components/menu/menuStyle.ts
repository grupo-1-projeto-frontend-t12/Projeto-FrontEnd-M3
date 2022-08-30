import styled from "styled-components";

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 48px;
  background: var(--color-grey);
  color: var(--color-fontescura);
  gap: 10px;
  border-radius: 17px;
  font-size: 12px;
  line-height: 26.39px;
  font-weight: 500;
  color: var(--color-green3);

  button{
    border: none;  
    width: 100px;
    
  }

  button:focus{
    background-color: var(--color-green);
    color: var(--color-white);  
    height: 100%;
    border-radius: 17px;
  }
 
`