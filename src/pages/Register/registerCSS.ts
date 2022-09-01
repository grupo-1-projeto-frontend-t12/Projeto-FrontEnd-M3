import styled from "styled-components";

export const ContainerRegister = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  .register {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 95%;
    max-width: 370px;
    background-color: var(--color-white);
    border-radius: 4px;
  }
  .divHeader {
    display: flex;
    align-items: center;
    justify-content: right;
    width: 100%;
    height: 26px;
    background-color: var(--color-white);
    border-radius: 4px;
  }
  .spanRegister {
    color: var(--color-green);
    font-size: 1.7rem;
    font-weight: bold;
    margin-bottom: 15px;
    height: 28px;
  }
  .btnReturn {
    background-color: var(--color-green);
    color: var(--color-grey);
    width: 25px;
    height: 22px;
    border: none;
    margin-top: 35px;
    margin-right: 20px;
    border-radius: 5px;
    font-weight: bold;
  }
  .btnReturn:hover {
    background: var(--color-green2);
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    color: grey;
    margin-top: 10px;
  }

  .errorRegister {
    font-size: .8rem;
    align-self: baseline;
    padding: 0 9px;
    margin-bottom: 5px;
    color: var(--color-green3);
  }

  .inputRegister {
    height: 48px;
    width: 95%;
    margin-bottom: 5px;
    background-color: var(--color-grey);
    color: var(--color-green3);
    font-size: 0.8rem;
    border-radius: 5px;
    border: none;
    padding: 0 3%;

    :focus {
      border: 1px solid var(--color-green2);
    }
  }

  .btnRegister {
    background-color: var(--color-green);
    width: 95%;
    height: 50px;
    border-radius: 5px;
    border: none;
    color: aliceblue;
    font-size: 1rem;
    margin-bottom: 20px;
  }
  .btnRegister:hover {
    background: var(--color-green2);
  }

  label {
    display: flex;
    align-items: center;
    width: 95%;
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-green3);
    margin-bottom: 8px;
  }
  

  /* 
  @media (min-width: 375px) {
    .main{
      width: 365px;
      flex-wrap: wrap;
        }
  }

  @media (min-width: 425px) {
    .main{
      width: 425px;
      flex-wrap: wrap;
        }
  }
@media (min-width: 768px) {
    .main{
      width: 768px;
      flex-wrap: wrap;
        }
  }
  @media (min-width: 1024px) {
    .main{
      width: 1024px;
      flex-wrap: wrap;
        }
  }
  @media (min-width: 1440) {
    .main{
      width: 1440px;
      flex-wrap: wrap;
        }
  } */
`;
