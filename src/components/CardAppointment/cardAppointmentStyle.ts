import styled from "styled-components";

export const ContainerCardAppointment = styled.div`
  background-color: var(--color-green);
  width: 267px;
  height: 120px;
  color: var(--color-white);
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .containerHeader {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .containerHeader button {
    background-color: transparent;
    color: var(--color-white);
    border: none;
    font-size: 8px;
  }
  .containerHeader button:hover {
    color: var(--color-green2);
  }

  h2 {
    font-size: 14px;
    font-weight: 500;
  }
  span {
    font-size: 14px;
    font-weight: 500;
  }
  .containerDataAppointment {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
  }
  .containerDataAppointment h3 {
    font-size: 12px;
    font-weight: 300;
  }
`;
