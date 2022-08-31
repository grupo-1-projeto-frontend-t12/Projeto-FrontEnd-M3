import styled from "styled-components";

export const TagFormUser = styled.form`
display: flex;
flex-direction: row;

position: relative;
bottom: 85px;


width: 100%;
height: 100px;

button{
    display: flex;
    flex-direction: column;
    align-items: center;

    background: transparent;

    border: none;

    color: var(--color-green);

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;

    .Icon{
        color: var(--color-green);
        width: 45px;
        height: 50px;
    }
}

div{
    display: flex;
    flex-direction: column;

    p{
    color: var(--color-green3);
    
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    }
    
    span{
    color: var(--color-green3);
    
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    }
}
`;