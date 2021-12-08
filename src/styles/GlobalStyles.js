import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: var(--blue);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  :root {
    --dark-gray: #484848;
    --gray: #9C98A6;
    --gray-light: #E6E6F0;
    --red: #FF385C;
    --dark-green: #118696;
    --white: #FFF;
    --blue: #2871CC;
  }

  .App {
    max-width: 800px;
    width: 100%;
    margin: 100px auto;

    @media (max-width: 340px) {
      margin: 10px auto;
      max-width: 300px;
    }

    @media (min-width: 341px) and (max-width: 767px) {
      margin: 10px auto;
      max-width: 330px;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      margin: 10px auto;
      max-width: 600px;
    }
  }

  /** Resetando estilização do React Select */
  .react-select__control, .react-select__value-container {
    height: 40px;
    font-size: 14px;
  }

  .react-select__menu {
    font-size: 14px;
  }

  .react-select__single-value {
    position: unset !important;
    font-size: 14px;
  }

  .react-select__placeholder {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    transform: none !important;
    top: unset !important;
  }
`;
