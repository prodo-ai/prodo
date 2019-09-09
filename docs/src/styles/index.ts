import { css } from "styled-components";

export type Colour = string;

export interface Theme {
  colours: {
    text: Colour;
    bg: Colour;
    primary: Colour;
    secondary: Colour;
    accent: Colour;
  };
}

export const theme: Theme = {
  colours: {
    text: "#333",
    bg: "white",
    primary: "#5dd9c1",
    secondary: "#4d3ae2",
    accent: "#4d3ae2",
  },
};

export const MaxPageWidth = 800;

export const sizes = {
  phone: "480px",
  tablet: "768px",
  laptop: "1200px",
};

export const NarrowScreenWidth = sizes.phone;

export const forNarrowScreen = (first, ...interpolations) => css`
  @media only screen ${NarrowScreenWidth != null &&
      css` and (max-width: ${NarrowScreenWidth})`} {
    ${css(first, ...interpolations)}
  }
`;

export const forWideScreen = (first, ...interpolations) => css`
  @media only screen ${NarrowScreenWidth != null &&
      css` and (min-width: ${NarrowScreenWidth})`} {
    ${css(first, ...interpolations)}
  }
`;