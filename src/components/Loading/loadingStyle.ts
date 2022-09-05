import styled from "styled-components";

export const StyledLoader = styled.div`
  width: 10rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  color: var(--color-fontescura);
  box-shadow: 0 0 1px 0 var(--color-green2);
  border-bottom: 6px solid var(--color-fontescura);
  border-top: 6px solid var(--color-green);
  border-radius: 50%;
  border-left: 2px solid var(--color-grey);
  border-right: 2px solid var(--color-grey);
  position: absolute;
  top: 50%;
  margin-top: -5rem;
  left: 50%;
  margin-left: -5rem;
`;
