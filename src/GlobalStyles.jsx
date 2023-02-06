import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`

/* *{
    outline: 1px solid red !important;
} */

:root{
    --Marine-blue: hsl(213, 96%, 18%);
--Purplish-blue: hsl(243, 100%, 62%);
--Pastel-blue: hsl(228, 100%, 84%);
--Light-blue: hsl(206, 94%, 87%);
--Strawberry-red: hsl(354, 84%, 57%);
--Cool-gray: hsl(231, 11%, 63%);
--Light-gray: hsl(229, 24%, 87%);
--Magnolia: hsl(217, 100%, 97%);
--Alabaster: hsl(231, 100%, 99%);
--White: hsl(0, 0%, 100%);
}

*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
    overflow-x: hidden;
    background-color: var(--magnolia);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    line-height: 1.25;
    color: var(--Marine-blue);
}

h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}

a{
    color:inherit;
    text-decoration: none;

}

input, button, textarea, select {
  font: inherit;
}
button{
    outline: none;
    border: none;
    background: none;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;

    text-decoration: none;
    color: inherit;
}

`;

export default GlobalStyles;