import styled from "styled-components";

export const ListDoctors = styled.ul`
  list-style: none;
  color: var(--color-white);
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  li {
    background-color: var(--color-green);
    width: 267px;
    height: 160px;
    color: var(--color-white);
    border-radius: 8px;
    padding: 10px;
  }

  h2 {
    font-size: 18px;
    font-weight: 800;
  }
  span {
    font-size: 12px;
    font-weight: 300;
  }
  h3 {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  .containerHeader {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .containerHeader button {
    background-color: transparent;
    border: none;
    color: var(--color-white);
    font-size: 20px;
  }
`;

export const ContainerCardAppointment = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;

  color: var(--color-green3);

  @media screen and (min-width: 1440px) {
    max-width: 1395px;
    height: 100%;
  }

  h2 {
    margin-bottom: 20px;
  }
`;