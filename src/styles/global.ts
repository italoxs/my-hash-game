import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: #0F0C29;
    color: #CECACA;
    -webkit-font-smoothing: antialiased;

    min-height: 100vh;
    min-width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  ::-webkit-scrollbar {
    width: 0.4rem;
  }
  ::-webkit-scrollbar-track {
    background: #5F4FF0;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: #5F4FF0;
  }

  .board-game {
    width: 400px;
    height: 300px;
    background: #5F4FF0;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  

    span {
      background: #CECACA;
      width: 33.33333%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #0F0C29;
      font-size: 30px;
      outline: 1px solid #5F4FF0;
      position: relative;

      &:hover {
        background: #5F4FF0;
        cursor: pointer;
      }

      abbr {
      font-size: 20px;
      color: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 10px;
      left: 10px;
      }
    }
  }

  img {
    display: flex;
    margin: auto;
  }
`;
