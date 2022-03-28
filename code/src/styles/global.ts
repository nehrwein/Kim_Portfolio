import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
  }

  :root {
    --gradientBlue: linear-gradient(180deg, #182A48 0%, rgba(24, 42, 72, 0.82) 100%);
    --blue: #182A48;
    --secondary: cyan;
  }


  body {
    margin:0 auto;
    padding: 0 10px;
    min-height: 100vh;
    height: 100%;
    color: whitesmoke;
    background: var(--gradientBlue);
    font-family: 'Domine', serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default GlobalStyle