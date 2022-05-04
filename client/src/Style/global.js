import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = styled.div`
h1, h2, h3, h4 {
  font-family: 'Lato', sans-serif;
  font-weight: 900;

}

& p, th, td, span, div, textarea {
  font-family: 'Lato', sans-serif;
  font-weight: 400;

}
`;