import styled from "styled-components";

interface IHeaderProps {
  login: boolean;
}

export const TagHeader = styled.header<IHeaderProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${props => props.login ? "column" : null};
  height: ${props => props.login ? "250px" : "415px"};
  gap: ${props => props.login ? "20px" : null};
  background: var(--bg-color-linear);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;

  @media screen and (min-width: 768px) {
    align-items: ${props => props.login ? "center" : "unset"};
  }

  > .container {
    width: 95%;
    max-width: 1200px;
    height: ${props => props.login ? "105px" : "400px"};
    margin-top: ${props => !props.login ? "40px" : null};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 1;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      height: 48px;
    }

    > img {
      width: 188px;
      height: 32px;
    }
  }

  .container-buttons {
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.login ? "center" : "space-between"};
    align-items: center;
    height: 290px;
    gap: 15px;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      height: 48px;
    }
  }

  .container-info {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 68%;

    @media screen and (min-width: 768px) {
      position: absolute;
      align-items: center;
      height: 100%;
    }

    > img {
      scale: 0.7;

      @media screen and (min-width: 768px) {
        scale: 1;
      }
    }

    > h2 {
      display: none;
      font-size: 36px;
      color: var(--color-green3);
      width: 226px;

      @media screen and (min-width: 768px) {
        display: block;
      }
    }
  }
`;