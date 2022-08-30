import styled from "styled-components";
import GlobalStyle from "../../styles/Global Styles/Global StylesCSS";

export const CotainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px 22px;
  gap: 26px;

  width: 369px;
  height: 502px;

  background: var(--color-grey-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;

    color: var(--color-text-black);
  }

  label {
    position: relative;
    top: 0;
    right: 146px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;

    color: var(--color-text-black);
  }

  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;

    width: 329.93px;
    height: 48px;

    background: var(--color-grey-light);

    border: 1.2182px solid var(--color-grey-light);
    border-radius: 4px;
  }

  span{
    position: relative;
    bottom: 58px;
    left: 365px;

    text-align: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;

    width: 117%;

    margin-bottom: -35px;

    border-radius: 5px;
    background-color: var(--color-grey-light);

    color: var(--color-text-black);
  }

  .btnEntrar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    gap: 10.15px;

    width: 324px;
    height: 48px;

    margin-top: 20px;

    background: var(--color-green-medium);
    color: var(--color-text-white);

    border: 1.2182px solid var(--color-green-medium);
    border-radius: 4.07px;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;

    color: var(--color-text-grey-medium);
  }

  .btnCadastrar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    gap: 10.15px;

    width: 324px;
    height: 48px;

    background: var(--color-grey-1);
    color: var(--color-grey0);

    border: 1.2182px solid var(--color-grey-1);
    border-radius: 4px;
  }
`;
