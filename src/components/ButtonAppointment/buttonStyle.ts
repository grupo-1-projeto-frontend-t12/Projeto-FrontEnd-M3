import styled from "styled-components";

export const Button = styled.button`

    background-color: var(--color-blue);
    border: none;
    color: var(--color-white);
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    width: 245px;
    height: 48px;
    border-radius: 4px;
    font-size: 16px;

    :hover{
    filter: brightness(1.5);
    color: var(--color-green3);
}
`