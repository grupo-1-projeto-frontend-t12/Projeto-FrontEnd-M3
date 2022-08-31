import styled from "styled-components";

export const ContainerHeader = styled.div`
 width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bg-color-linear);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;

  

  > .container {
    width: 95%;
    max-width: 1200px;
    height: 124px;
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
      margin-top: 15px;
      width: 188px;
      height: 32px;
    }
  }

  .container-buttons {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-bottom: 11px;
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
    align-items: end;
    height: 60%;

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
`