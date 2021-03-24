import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  @font-face {
    font-family: 'Expo Arabic';
    font-style: normal;
    font-weight: 300;
    src: url('../fonts/ExpoArabic-Light.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Expo Arabic';
    font-style: normal;
    font-weight: 500;
    src: url('../fonts/ExpoArabic-Medium.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Expo Arabic';
    font-style: normal;
    font-weight: 700;
    src: url('../fonts/ExpoArabic-bold.ttf') format('truetype');
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Expo Arabic'
  }
`
