import styled from "styled-components";

export const TagHeader = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 415px;
  background: var(--bg-color-linear);

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;

  > .container {
    width: 95%;
    height: 375px;
    max-width: 1200px;
    margin-top: 50px;
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

    .container-buttons {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 290px;
      gap: 15px;

      @media screen and (min-width: 768px) {
        flex-direction: row;
        height: 48px;
      }
    }
  }

  .container-info {
    position: fixed;
    display: flex;
    justify-content: center;
    height: 68%;

    @media screen and (min-width: 768px) {
      position: absolute;
      align-items: center;
      height: 100%;
    
    }

    > img {
      scale: .5;

      @media screen and (min-width: 768px) {
        scale: 1;
        object-fit: scale-down;
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