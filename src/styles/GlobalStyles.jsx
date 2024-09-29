// styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #000;
    color: #fff;
    scroll-behavior: smooth;
  }

  main {
    padding-left: 80px;
    padding-right: 80px; /* 오른쪽 패딩 추가 */

    @media (max-width: 768px) {
      padding-left: 0;
      padding-right: 0;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
