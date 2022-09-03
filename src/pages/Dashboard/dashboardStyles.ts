import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  max-width: 1395px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  @media screen and (min-height: 800px) {
    height: 800px;
  }
`;

export const TagDivUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  gap: 6px;
  padding: 8px;

  width: 95%;
  max-width: 1257px;
  height: 100px;

  button {
    display: flex;
    flex-direction: column;
    align-items: center;

    background: transparent;

    border: none;

    color: var(--color-green);

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;

    .Icon {
      color: var(--color-green);
      width: 45px;
      height: 50px;
    }
  }

  div {
    display: flex;
    flex-direction: column;

    p {
      color: var(--color-green3);
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 28px;
    }

    span {
      color: var(--color-green3);
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 20px;
    }
  }
`;

export const DivModalPerfil = styled.div`
  display: flex;

  width: 95%;
  max-width: 1257px;
  height: 100px;

  background: var(--color-white);

  border-radius: 8px;
`;