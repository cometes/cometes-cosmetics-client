// export const max = {
//   small: "@media screen and (max-width: 430px)",
//   medium: "@media screen and (max-width: 815px)",
//   w1000: "@media screen and (max-width: 1015px)",
//   large: "@media screen and (max-width: 1215px)",
//   Xlarge: "@media screen and (max-width: 1440px)",
//   XXlarge: "@media screen and (max-width: 1620px)"
// };
// export const min = {
//   small: "@media screen and (min-width: 430px)",
//   medium: "@media screen and (min-width: 815px)",
//   w1000: "@media screen and (min-width: 1015px)",
//   large: "@media screen and (min-width: 1215px)",
//   Xlarge: "@media screen and (min-width: 1440px)",
//   XXlarge: "@media screen and (min-width: 1620px)"
// };

export const max = (width: number) => {
  return `@media screen and (max-width: ${width}px)`;
};
export const min = (width: number) => {
  return `@media screen and (min-width: ${width}px)`;
};
