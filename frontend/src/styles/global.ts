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
`;
export default GlobalStyle;
