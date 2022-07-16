import styled from "styled-components";

export const Container = styled.div`
  width: 30rem;
  height: 8rem;
  border: 0.1rem dashed var(--gray);
  border-radius: 2rem;
  margin: 0 auto;
  margin-top: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  margin-bottom: 1.6rem;

  strong {
    width: 16rem;

    font: 500 1.4rem;
    color: var(--gray);
    position: absolute;
  }
  img {
    width: 30rem;
    height: 8rem;
    position: absolute;
    object-fit: cover;
    border-radius: 2rem;
  }
  input {
    height: 100%;
    width: 100%;
    opacity: 0;
    outline: 0;

    cursor: pointer;
    z-index: 999;
  }
  span {
    margin-top: 40%;
    margin-left: -90%;
    width: 100%;
    color: var(--red);
  }
`;

