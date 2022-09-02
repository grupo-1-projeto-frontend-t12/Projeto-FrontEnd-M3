import styled from "styled-components";

export const TagDivUser = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;

position: absolute;
top: 253px;

gap: 6px;
padding: 8px;

width: 95%;
max-width: 1257px;
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