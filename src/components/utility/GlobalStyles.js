// libraries
import { createGlobalStyle } from 'styled-components'
// custom
import { fonts, breakpoints } from '../../utility/variables'

const GlobalStyles = createGlobalStyle`

html {
  line-height: 1.15; /* 1 */
  overflow-x: hidden; 
  font-size: 16px;
  font-family: ${fonts.main};

  @media(${breakpoints.medium}) {
    font-size: 18px;
  }
  @media(${breakpoints.extra}) {
    font-size: 20px;
  }
}

*:focus {
  @media (max-width: 768px) {
    outline: none !important;
  }
}

body {
  margin: 0;
  overflow-x: hidden;
}

main {
  display: block;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  background-color: transparent;
}

code,
kbd,
samp {
  font-family: monospace; /* 1 */
  font-size: 1em; /* 2 */
}

small {
  font-size: 80%;
}

sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  margin: 0; /* 2 */
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
}

button,
input {
  /* 1 */
  overflow: visible;
}

button,
select {
  /* 1 */
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box; /* 1 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  color: inherit; /* 2 */
  white-space: normal; /* 1 */
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}
`

export default GlobalStyles
