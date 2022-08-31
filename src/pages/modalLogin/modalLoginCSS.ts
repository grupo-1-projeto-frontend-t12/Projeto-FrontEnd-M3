import styled from "styled-components";
import GlobalStyle from "../../styles/Global Styles/Global StylesCSS";

export const CotainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 22px 22px;
  gap: 26px;

  width: 369px;
  height: 502px;

  background: var(--color-white);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  z-index: 9999;

  h2 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;

    
    font-size: 18px;
    line-height: 28px;

    color: var(--color-green3);
  }

  label {
    position: relative;
    top: 0;
    right: 146px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 10px;

    color: var(--color-green3);
  }

  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;

    width: 329.93px;
    height: 48px;

    background: var(--color-grey);

    border: 1.2182px solid var(--color-grey);
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
    background-color: var(--color-grey);

    color: var(--color-green3);
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

    background: var(--color-green);
    color: var(--color-white);

    border: 1.2182px solid var(--color-green);
    border-radius: 4.07px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
  }

  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;

    color: var(--color-transparencia);
  }

  .btnCadastrar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 324px;
    height: 20px;

    background: transparent;
    color: var(--color-green);

    border: none;
  }
`;
