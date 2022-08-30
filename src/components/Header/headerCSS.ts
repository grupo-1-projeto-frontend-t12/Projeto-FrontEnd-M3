import styled from "styled-components";

export const TagHeader = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 415px;
  background-color: var(--color-green2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  > div {
    width: 95%;
    height: 65px;
    max-width: 1200px;
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      width: 188px;
      height: 32px;
    }
  }

`;