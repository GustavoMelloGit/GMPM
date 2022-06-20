import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif !important;
    }
    html{
        height: 100%;
        width: 100%;
    }
    body{
        height: 100%;
        background-color: ${colors.gray[700]};
        width: 100%;
    }
    a{
        cursor: pointer;
    }
    #root{
        height: 100%;
        width: 100%;
    }
  * {
    scrollbar-width: auto;
    scrollbar-color: #ff6341 transparent;
  }

  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #ff6341;
    border-radius: 10px;
    border: 3px solid transparent;
  }
`;
export default GlobalStyle;
