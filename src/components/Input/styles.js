import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--gray);
    font-size: 13px;
  }

  input {
    height: 40px;
    border-radius: 4px;
    border: 1px solid var(--gray-light);
    margin-bottom: 15px;
    padding: 0 10px;
    color: var(--dark-gray);
    width: 100%;
    transition: border 0.5s;

    &:focus {
      border-color: var(--blue);
    }
  }
  > span {
    margin-top: 0.5rem;
    width: 100%;
    color: var(--red);
  }
`;
