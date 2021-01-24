import { createGlobalStyle } from 'styled-components';

import { colors } from '_constants';

export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
}

body {
    background-color: ${colors.background};
    font-family: sans-serif;
    margin: 0;
    font-size: 18px;
    color: #45443b;
}

a {
    text-decoration: none;
    color: white;
}
    
    a:visited {
    text-decoration: none;
    color: white;
}
`;
