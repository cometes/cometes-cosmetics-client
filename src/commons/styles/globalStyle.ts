import { css } from "@emotion/react";

export const globalStyle = css`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600&display=swap");
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css");
  @import url("https://webfontworld.github.io/amore/AritaBuri.css");
  @import url("https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css");
  @import url("https://cdn-uicons.flaticon.com/2.0.0/uicons-solid-straight/css/uicons-solid-straight.css");
  @import url("https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-straight/css/uicons-regular-straight.css");
  @import url("https://cdn-uicons.flaticon.com/2.0.0/uicons-thin-rounded/css/uicons-thin-rounded.css");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: "Pretendard";
    font-size: 1.6rem;
    letter-spacing: -0.03em;
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
