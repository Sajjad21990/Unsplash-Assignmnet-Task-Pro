import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: sans-serif
    }
    img{
        width: 100%;
        height:100%;
        display: block;
        transition: .8s ease;
        backface-visibility: hidden;
    }
    .single-image{
        position: relative;
        overflow: hidden
    }
.overlay {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    width: 90%
}

.text {
  color: black;
  font-size: 16px;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 2px;
  font-family: 'Josefin Sans', sans-serif;
}

.single-image:hover > img{
  opacity: 0.3;
  cursor: pointer;
  transform: scale(1.3)
}

.single-image:hover > .overlay {
  opacity: 1;
   cursor: pointer;
}

.loader-container{
    display: flex;
    align-items: center;
    justify-content:center;
    width: 100vw;
    height: 20vh
}

`;
