import styled, { css } from "styled-components";

const accentColor = "#ff6b08";
const accentColorHover = "#d15807";
const accentTextColor = "#ffffff";

const primaryColor = "transparent";
const primaryColorBorder = "#242A37";
const primaryColorHover = "#f25137";
const primaryTextColor = "#242A37";

const greyColor = "#6d7a8d";
const greyColorHover = "#47566f";

const duration = "250ms";
const cubic = "cubic-bezier(0.4, 0, 0.2, 1)";

export const ButtonStyled = styled.button`
  height: ${({ height }) => height};
  width: 100%;
  max-width: ${({ width }) => width};

  padding: 0;
  border: none;

  font-family: "Montserrat";

  transition: background-color ${duration} ${cubic},
    border-color ${duration} ${cubic};

  ${({ shadow }) =>
    shadow
      ? css`
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        `
      : ""};

  ${({ textSize }) => {
    switch (textSize) {
      case "medium":
        return css`
          font-weight: 500;
          font-size: 14px;
          line-height: 1.21;
        `;
      default:
        return css`
          font-weight: 600;
          font-size: 16px;
          line-height: 1.25;
        `;
    }
  }}

  ${({ color }) => {
    switch (color) {
      case "accent":
        return css`
          color: ${accentTextColor};
          background-color: ${accentColor};
          &:hover,
          &:focus {
            background-color: ${accentColorHover};
          }
        `;
      case "grey":
        return css`
          color: ${accentTextColor};
          background-color: ${greyColor};
          &:hover,
          &:focus {
            background-color: ${greyColorHover};
          }
        `;
      default:
        return css`
          color: ${primaryTextColor};
          background-color: ${primaryColor};
          border: 1px solid ${primaryColorBorder};
          &:hover,
          &:focus {
            border-color: ${primaryColorHover};
          }
        `;
    }
  }}
`;
