import styled from "styled-components";
import { darken } from "polished";

export const Btn = styled.button`
  border: 0;
  background: var(--blue);
  height: 40px;
  color: #fff;
  padding: 0 15px;
  border-radius: 4px;
  font-weight: bold;
  align-self: flex-end;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.08, "#2871CC")};
  }

  @media (max-width: 767px) {
    align-self: stretch;
  }
`;
