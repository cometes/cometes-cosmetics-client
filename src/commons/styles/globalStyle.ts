import { css } from "@emotion/react";
import { mq } from "../libraries/breakPoints";

export const globalStyle = css`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css");
  @import url("https://webfontworld.github.io/amore/AritaBuri.css");

  html {
    font-size: 62.5%;
  }
  body {
    font-family: "Pretendard";
    font-size: 1.6rem;
    letter-spacing: -0.03em;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  input {
    &:focus {
      /* outline-color: #88b04b; */
    }
  }

  @font-face {
    font-family: "Arita-dotum";
    src: url("/fonts/Arita4.0_M.otf");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Arita-dotum";
    src: url("/fonts/Arita4.0_SB.otf");
    font-weight: 600;
    font-style: normal;
  }
`;
