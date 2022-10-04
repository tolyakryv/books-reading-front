import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: ${({ height }) => height};
  width: 100%;
  max-width: ${({ width }) => width};

  padding: 0;
  border: none;

  font-family: "Montserrat";

  transition: background-color var(--duration) var(--cubic),
    border-color var(--duration) var(--cubic);

  &:hover,
  &:focus {
    text-decoration: none;
  }

  ${({ shadow }) =>
    shadow === "true"
      ? css`
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        `
      : ""};

  ${({ textsize }) => {
    switch (textsize) {
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
          color: #ffffff;
          background-color: var(--color-main-accent);
          &:hover,
          &:focus,
          &:disabled {
            color: #ffffff;
            background-color: #d15807;
          }
        `;
      case "grey":
        return css`
          color: #ffffff;
          background-color: #6d7a8d;
          &:hover,
          &:focus {
            color: #ffffff;
            background-color: #47566f;
          }
        `;
      default:
        return css`
          color: var(--color-main);
          background-color: transparent;
          border: 1px solid var(--color-main);
          &:hover,
          &:focus {
            color: var(--color-main);
            border-color: #f25137;
          }
        `;
    }
  }}
`;
