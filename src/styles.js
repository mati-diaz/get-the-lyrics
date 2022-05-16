import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    background-color: rgb(242, 242, 242);
    font-family: 'Roboto', sans-serif;
  }
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-weight: 900;
  font-size: 120px;
  text-align: center;
  margin-bottom: 0;
  margin-top: 20px;

  background: -webkit-linear-gradient(rgb(242, 242, 242), rgb(23, 124, 255));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

export const LyricsContainer = styled.div`
  margin-top: 50px;
  border-radius: 5px;
  font-size: 22px;
`;

export const LyricsP = styled.p`
  /* border-bottom: 1px solid rgb(180, 180, 180); */
  border-radius: 10px;
  padding: 20px 10px;
  margin: 0px;
  transition-property: background-color;
  transition-duration: .5s;

  &:hover {
    background-color: rgb(0,145,255);
    color: white;
  }
`;