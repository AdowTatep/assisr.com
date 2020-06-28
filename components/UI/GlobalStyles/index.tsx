import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, #root, #__next, body {
    transition: background-color 70ms ease-out, color 70ms ease-out;
    overflow-x: hidden;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.textMain};

    &.dark-mode {
      /* --primary: ; */
      /* --secondary: ; */
      --background: #24292D;
      --background-inverted: #E9ECEE;
      --text-main: #FAFBFD;
      --text-lighter: #5B5F68;
      --text-on-inverted: #24292D;
    }

    &.light-mode {
      /* --primary: ; */
      /* --secondary: ; */
      --background: #E9ECEE;
      --background-inverted: #24292D;
      --text-main: #24292D;
      --text-lighter: #5B5F68;
      --text-on-inverted: #FAFBFD;
    }
  }
`;
