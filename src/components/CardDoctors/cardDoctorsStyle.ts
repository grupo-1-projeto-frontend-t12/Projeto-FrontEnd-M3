import styled from "styled-components";

export const ContainerDoctors = styled.div`

    background-color: var(--color-green);
    width: 267px;  
    color: var(--color-white);
    border-radius: 8px;
    padding:  10px;
    
    

    h2{
       font-size : 18px;
       font-weight: 800;
    }

    span{
        font-size : 12px;
       font-weight: 300; 
    }

    h3{
        font-size : 14px;
       font-weight: 500;
         margin-bottom: 5px;
    }

    .containerHeader{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .containerHeader button{
        background-color: transparent;
        border: none;
        color: var(--color-white);
        font-size: 20px;
    }

`