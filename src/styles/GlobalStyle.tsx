import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
/*
@font-face {
  font-family: "JetBrains Mono";
  src: url("./assets/fonts/JetBrainsMono-Regular.eot")
      format("embedded-opentype"),
    url("./assets/fonts/JetBrainsMono-Regular.woff2") format("woff2"),
    url("./assets/fonts/JetBrainsMono-Regular.woff") format("woff"),
    url("./assets/fonts/JetBrainsMono-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
*/
* {
  -webkit-font-feature-settings: "liga" on, "calt" on;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: "JetBrains Mono";
}
html {
  box-sizing: border-box;
  font-size: 16px;
  width: 100%;
  height: 100%;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}
ol,
ul {
  list-style: none;
}
img {
  max-width: 100%;
  height: auto;
}
body {
  background-color: #303030;
  width: 100%;
  height: 100%;
}
#root {
  height: 100%;
  width: 100%;
}
`
