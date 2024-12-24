import styled from 'styled-components';
import img from '../../src/assets/1sqooshed.jpg'


    // list-style-type: none;

export const Section = styled.section`
    background-image: url('${img}');
    height: 100vh; /* Висота секції */
    width: 100%; /* Ширина секції */
    background-size: cover; /* Зображення покриває всю секцію */
    background-position: center; /* Центрування зображення */
    display: flex; /* Використання Flexbox для вирівнювання вмісту */
    align-items: center; /* Вертикальне  вирівнювання по центру */
    justify-content: center; /* Горизонтальне вирівнювання по центру */
    color: white; 
`;


export const Container = styled.div`
  height: 100vh; 
  width: 100%;
  margin: 0 15px; 
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: "Fredoka", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  
`;

export const List = styled.div`
    
    padding: 0;
    margin-right: 60px;
`;

export const Button = styled.button`
    background-color: trasparent;
    width: 500px;
    height: 70px;  
    border: 1px solid  #0a3054;
    border-radius: 40px;
    font-size: 35px;
    padding: 6px 16px 6px 20px;
    margin: 0 0 35px 0; 
    color: #0a3054;
    display: flex;
    align-items: center;
    justify-content: center; 
    transition-property: background-color, transform;
    transition-duration: 500ms;
    transition-timing-function: linear;
    transition-delay: 0;

    &:hover {
    background-color:rgb(72, 197, 191);
    transform: scale(1.1);
}
   
    // // &:focus-visible {
    // //     outline: none;
    // }

   
`;







/* #root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
} */
