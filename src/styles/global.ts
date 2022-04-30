import { createGlobalStyle } from 'styled-components'
import colors from './colors';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif !important;
        color: #fff;
    }
    body{
        background-color: ${colors.gray[700]};
    }
`
export default GlobalStyle;