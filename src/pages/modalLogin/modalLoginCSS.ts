import styled from "styled-components";

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;

`

export const CotainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 22px 22px;
  gap: 20px;

  width: 95%;
  max-width: 370px;

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
    align-self: baseline;
    
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

    width: 100%;
    height: 48px;

    background: var(--color-grey);

    border: none;
    border-radius: 4px;
  }

  span{
    bottom: 58px;
    left: 365px;

    text-align: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;

    color: var(--color-green3);
  }

  .btnEntrar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    gap: 10.15px;

    width: 100%;
    height: 48px;

    margin-top: 20px;

    background: var(--color-green);
    color: var(--color-white);

    border: none;
    border-radius: 4.07px;

    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    :hover {
      background: var(--color-green2);
    }
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
