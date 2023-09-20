import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 12rem;
    background: #121;
    font-family: 'Poppins', sans-serif;
  }
  
  input {
    box-sizing: border-box;
  }

  input[type="text"],
  select {
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 100%;
}
`;