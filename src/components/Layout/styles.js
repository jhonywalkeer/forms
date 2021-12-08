import styled from "styled-components";
import { Form as Unform } from "@unform/web";

export const Container = styled(Unform)`
  padding: 20px;
  background: var(--white);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px #33333333;
`;

export const Group2 = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 10px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

export const Group3 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;
