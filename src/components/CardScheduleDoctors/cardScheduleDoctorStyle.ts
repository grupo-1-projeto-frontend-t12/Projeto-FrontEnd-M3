import styled from "styled-components";

export const ContainerSchedule = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 12px;
    font-weight: 500;
    margin: 0;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    flex-wrap: wrap;

    gap: 15px;

    width: 100%;
  }
  li {
    display: flex;
    gap: 15px;
    justify-content: space-around;
    align-items: center;
    background-color: var(--color-green);
    color: var(--color-white);
    width: 267px;
    height: 30px;
    border-radius: 4px;
  }

  .containerList {
    display: flex;
    gap: 5px;
  }

  button {
    background-color: transparent;
    border: none;
    color: var(--color-green3);

    font-size: 20px;
  }
  button:hover {
    color: var(--color-green2);
  }
`;

export const ContainerRenderDoctorSchedule = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  height: 350px;
  color: var(--color-green3);

  .doctorData {

    display: flex;
    justify-content: space-between;
  }

  .doctorData button{
    background-color: transparent;
    color: var(--color-green3);
    border: none;
  }

  .doctorData button:hover{
    color: var(--color-green2);
  }
`;